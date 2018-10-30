import fetch from 'isomorphic-unfetch';
import xml2js from 'xml2js';
import util from 'util';

export function parse(json) {
  var channel = json.rss.channel;
  var rss = { items: [] };

  if (util.isArray(json.rss.channel))
    channel = json.rss.channel[0];

  if (channel.title) {
    rss.title = channel.title[0];
  }
  if (channel.description) {
    rss.description = channel.description[0];
  }
  if (channel.link) {
    rss.url = channel.link[0];
  }

  // add rss.image via @dubyajaysmith
  if (channel.image) {
    rss.image = channel.image[0].url
  }

  if (!rss.image && channel["itunes:image"]) {
    rss.imasage = channel['itunes:image'][0].href
  }

  rss.image = rss.image && Array.isArray(rss.image) ? rss.image[0] : '';

  if (channel.item) {
    if (!util.isArray(channel.item)) {
      channel.item = [channel.item];
    }
    channel.item.forEach(function (val) {
      var obj = {};
      obj.title = !util.isNullOrUndefined(val.title) ? val.title[0] : '';
      obj.description = !util.isNullOrUndefined(val.description) ? val.description[0] : '';
      obj.url = obj.link = !util.isNullOrUndefined(val.link) ? val.link[0] : '';

      if (val['itunes:subtitle']) {
        obj.itunes_subtitle = val['itunes:subtitle'][0];
      }
      if (val['itunes:summary']) {
        obj.itunes_summary = val['itunes:summary'][0];
      }
      if (val['itunes:author']) {
        obj.itunes_author = val['itunes:author'][0];
      }
      if (val['itunes:explicit']) {
        obj.itunes_explicit = val['itunes:explicit'][0];
      }
      if (val['itunes:duration']) {
        obj.itunes_duration = val['itunes:duration'][0];
      }
      if (val['itunes:season']) {
        obj.itunes_season = val['itunes:season'][0];
      }
      if (val['itunes:episode']) {
        obj.itunes_episode = val['itunes:episode'][0];
      }
      if (val['itunes:episodeType']) {
        obj.itunes_episodeType = val['itunes:episodeType'][0];
      }
      if (val.pubDate) {
        //lets try basis js date parsing for now
        obj.created = Date.parse(val.pubDate[0]);
      }
      if (val['media:content']) {
        obj.media = val.media || {};
        obj.media.content = val['media:content'];
      }
      if (val['media:thumbnail']) {
        obj.media = val.media || {};
        obj.media.thumbnail = val['media:thumbnail'];
      }
      if (val.enclosure) {
        obj.enclosures = [];
        if (!util.isArray(val.enclosure))
          val.enclosure = [val.enclosure];
        val.enclosure.forEach(function (enclosure) {
          var enc = {};
          for (var x in enclosure) {
            enc[x] = enclosure[x][0];
          }
          obj.enclosures.push(enc);
        });
      }

      rss.items.push(obj);
    });
  }

  return rss;
}

export function xmlToJson(xml) {
  return new Promise((resolve, reject) => {
    const parser = new xml2js.Parser({ trim: false, normalize: true, mergeAttrs: true });
    parser.parseString(xml, function (err, result) {
      if (err) return reject(err);
      resolve(parse(result));
    });
  });
}

export function get() {
  const url = 'https://medium.com/feed/camerakit';
  const config = {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:45.0) Gecko/20100101 Firefox/45.0',
      accept: 'text/html,application/xhtml+xml',
      origin: '*.camerakit.website'
    },
    redirect: 'follow',
  };
  return fetch(url, config)
    .then(res => res.text())
    .then(xml => xmlToJson(xml));
}
