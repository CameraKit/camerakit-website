import React from 'react';
import Container from '../container';
import withPure from '../hoc/pure';

import Button from '../button';

export default withPure(() => (
  <Container
    role="main"
    wide
    overflow
    minHeight="96vh"
    mobileStyle="min-height: 96vh;"
    style={{
      display: 'flex',
      maxWidth: '52rem',
      alignItems: 'center',
    }}
  >
    <Container>
      <section className="getstarted">
        <style jsx>
          {`
          .getstarted {
            margin-top: 20rem;
            margin-bottom: 20rem;
          }
          .getstarted h1 {
            font-weight: 200;
            font-size: 2.8rem;
            margin-bottom: 4rem;
          }
          .getstarted h2 {
            font-weight: 600;
            font-size: 1.8rem;
          }
          .getstarted p {
            font-weight: 400;
            font-size: 1.1rem;
          }
          .getstarted .section {
            display: flex;
            margin-top: 6rem;
            margin-left: -60px;
            align-items: center;
          }
          .getstarted .section img {
            width: 40px;
            height: 40px;
            margin-right: 20px;
          }
          .getstarted code {
            width: 100%;
            padding: 1rem;
            margin: 2rem 0;
            overflow: hidden;
            text-align: left;
            background: #F5F5F5;
            display: inline-block;
            word-wrap: break-word;
            border: 1px solid #979797;
          }
          .getstarted code:before, .getstarted code:after {
            content: "";
          }
          .getstarted code .c-i1 {
            margin-left: 1rem;
          }
          .getstarted code .c-b {
            font-weight: 600;
          }
          .getstarted code .c-r {
            color: #9C1200;
          }
          .getstarted code .c-s {
            height: 1rem;
          }
          .getstarted .button {
            margin-top: 10rem;
            text-align: center;
          }
          @media(max-width: 60rem) {
            .getstarted .section {
              margin-left: 0;
            }
          }
        `}
        </style>
        <div>
          <div>
            <h1>
              {'Getting Started with CameraKit'}
            </h1>
            <p>
              {'This page helps you install and integrate CameraKit into your Android project. We recommend taking a look at the Developer Guides before you get started if this is your first time developing for Android. Here we will walk you through installation and basic usage to get you started on CameraKit.'}
            </p>
          </div>
          <div>
            <div className="section">
              <img src="../../static/ic_installation.svg" alt="" />
              <h2>
                {'Installation'}
              </h2>
            </div>
            <p>
              {'Install CameraKit through the app-level build.gradle file for your Android project. In the dependencies section, add the following four dependencies:'}
            </p>
            <code>
              <div><span>{'dependencies {'}</span></div>
              <div className="c-i1"><span className="c-b">{"implementation"}</span> <span className="c-r">{"'com.camerakit:camerakit:1.0.0-beta3.9'"}</span></div>
              <div className="c-i1"><span className="c-b">{"implementation"}</span> <span className="c-r">{"'com.camerakit:jpegkit:0.1.0'"}</span></div>
              <div className="c-i1"><span className="c-b">{"implementation"}</span> <span className="c-r">{"'org.jetbrains.kotlin:kotlin-stdlib-jdk7:1.2.61'"}</span></div>
              <div className="c-i1"><span className="c-b">{"implementation"}</span> <span className="c-r">{"'org.jetbrains.kotlinx:kotlinx-coroutines-android:0.24.0'"}</span></div>
              <div><span>{'}'}</span></div>
            </code>
            <p>
              {'CameraKit 1.0.0-beta3.9 relies on three additional dependencies, in addition to the CameraKit library, which are our own JPEGKit and two other Kotlin libraries.'}
            </p>
          </div>
          <div>
            <div className="section">
              <img src="../../static/ic_code.svg" alt="" />
              <h2>
                {'Basic Usage'}
              </h2>
            </div>
            <p>
              {'There are two components when creating a CameraKitView. First, the XML Layout file. Below is an example for CameraKitView with several properties set. To see all settable options, check out our <a href="/docs">Docs</a>.'}
            </p>
            <code>
              <div><span>{'<com.camerakit.CameraKitView'}</span></div>
              <div className="c-i1"><span className="c-b">{"android"}</span><span className="c-r">{':id="@+id/camera"'}</span></div>
              <div className="c-i1"><span className="c-b">{"android"}</span><span className="c-r">{':layout_width="match_parent"'}</span></div>
              <div className="c-i1"><span className="c-b">{"android"}</span><span className="c-r">{':layout_height="wrap_content"'}</span></div>
              <div className="c-i1"><span className="c-b">{"android"}</span><span className="c-r">{':adjustViewBounds="true"'}</span></div>
              <div className="c-i1"><span className="c-b">{"android"}</span><span className="c-r">{':keepScreenOn="true" <!-- keep screen awake while CameraKitView is active -->'}</span></div>
              <div className="c-i1"><span className="c-b">{"app"}</span><span className="c-r">{':camera_flash="auto"'}</span></div>
              <div className="c-i1"><span className="c-b">{"app"}</span><span className="c-r">{':camera_facing="back"'}</span></div>
              <div className="c-i1"><span className="c-b">{"app"}</span><span className="c-r">{':camera_focus="continuous"'}</span></div>
              <div className="c-i1"><span className="c-b">{"app"}</span><span className="c-r">{':camera_permissions="camera"'}</span> <span>{'/>'}</span></div>
            </code>
            <p>
              {'Now, initialize the CameraKitView in the corresponding Java activity and override the following methods:'}
            </p>
            <code>
              <div><span>{'private CameraKitView cameraKitView;'}</span></div>
              <div className="c-s"><span>{''}</span></div>
              <div><span>{'@Override'}</span></div>
              <div><span>{'protected void'}</span> <span className="c-b c-r">{'onCreate'}</span><span>{'(Bundle savedInstanceState) {'}</span></div>
              <div className="c-i1"><span>{'super.onCreate(savedInstanceState);'}</span></div>
              <div className="c-i1"><span>{'setContentView(R.layout.activity_main);'}</span></div>
              <div className="c-i1"><span>{'cameraKitView = findViewById(R.id.camera);'}</span></div>
              <div><span>{'}'}</span></div>
              <div className="c-s"><span>{''}</span></div>
              <div><span>{'@Override'}</span></div>
              <div><span>{'protected void'}</span> <span className="c-b c-r">{'onStart'}</span><span>{'() {'}</span></div>
              <div className="c-i1"><span>{'super.onStart();'}</span></div>
              <div className="c-i1"><span>{'cameraKitView.onStart();'}</span></div>
              <div><span>{'}'}</span></div>
              <div className="c-s"><span>{''}</span></div>
              <div><span>{'@Override'}</span></div>
              <div><span>{'protected void'}</span> <span className="c-b c-r">{'onResume'}</span><span>{'() {'}</span></div>
              <div className="c-i1"><span>{'super.onResume();'}</span></div>
              <div className="c-i1"><span>{'cameraKitView.onResume();'}</span></div>
              <div><span>{'}'}</span></div>
              <div className="c-s"><span>{''}</span></div>
              <div><span>{'@Override'}</span></div>
              <div><span>{'protected void'}</span> <span className="c-b c-r">{'onPause'}</span><span>{'() {'}</span></div>
              <div className="c-i1"><span>{'cameraKitView.onPause();'}</span></div>
              <div className="c-i1"><span>{'super.onPause();'}</span></div>
              <div><span>{'}'}</span></div>
              <div className="c-s"><span>{''}</span></div>
              <div><span>{'@Override'}</span></div>
              <div><span>{'protected void'}</span> <span className="c-b c-r">{'onStop'}</span><span>{'() {'}</span></div>
              <div className="c-i1"><span>{'cameraKitView.onStop();'}</span></div>
              <div className="c-i1"><span>{'super.onStop();'}</span></div>
              <div><span>{'}'}</span></div>
              <div className="c-s"><span>{''}</span></div>
              <div><span>{'@Override'}</span></div>
              <div><span>{'public void'}</span> <span className="c-b c-r">{'onRequestPermissionsResult'}</span><span>{'(int requestCode, String[] permissions, int[] grantResults) {'}</span></div>
              <div className="c-i1"><span>{'super.onRequestPermissionsResult(requestCode, permissions, grantResults);'}</span></div>
              <div className="c-i1"><span>{'cameraKitView.onRequestPermissionsResult(requestCode, permissions, grantResults);'}</span></div>
              <div><span>{'}'}</span></div>
            </code>
            <p>
              {'The first five methods handle lifecycle changes in the application, while the final method handles camera permissions. Run the application on your device to see the live camera preview.'}
            </p>
          </div>
        </div>
        <div>
          <div className="section">
            <img src="../../static/ic_completed.svg" alt="" />
            <h2>
              {'That’s It!'}
            </h2>
          </div>
          <p>
            {'Congratulations! You have successfully integrated CameraKit into your Android project. CameraKit is a powerful platform with many possibilities. Dive into our Docs for step-by-step tutorials on setup and image capture and learn more about the possible options and settings of CameraKit.'}
          </p>
        </div>
        <div className="button">
          <Button href="/docs" callout>
            Documentation
          </Button>
        </div>
      </section>
    </Container>
  </Container>
));
