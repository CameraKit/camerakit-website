# CameraKit Documentation - v0.13.4

1. Setup
2. Usage
3. Capturing Images
4. Extra Attributes
5. Permissions
6. Sizing
7. Events

## Setup

Add __CameraKit__ to the dependencies block in your <b>app</b> level <b>build.gradle</b>:

```groovy
compile 'com.wonderkiln:camerakit:0.13.4'
```

## Usage

To use CameraKit, simply add a <b>CameraView</b> to your layout:

```xml
<com.wonderkiln.camerakit.CameraView
    android:id="@+id/camera"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:adjustViewBounds="true" />
```

Override <b>onResume</b> and <b>onPause</b> in your activity, and make calls respectively to <b>CameraView.start()</b> and <b>CameraView.stop()</b>.

```java
@Override
protected void onResume() {
    super.onResume();
    cameraView.start();
}

@Override
protected void onPause() {
    cameraView.stop();
    super.onPause();
}
```

### Capturing Images

To capture an image just call <b>CameraView.captureImage()</b>. Then setup a <b>CameraListener</b> to handle the image callback.

```java
camera.setCameraListener(new CameraListener() {
    @Override
    public void onPictureTaken(byte[] picture) {
        super.onPictureTaken(picture);

        // Create a bitmap	
        Bitmap result = BitmapFactory.decodeByteArray(picture, 0, picture.length);
    }
 });

camera.captureImage();
```

### Capturing Video

To capture video just call <b>CameraView.startRecordingVideo()</b> to start, and <b>CameraView.stopRecordingVideo()</b> to finish. Setup a <b>CameraListener</b> to handle the video callback.

```java
camera.setCameraListener(new CameraListener() {
    @Override
    public void onVideoTaken(File video) {
        super.onVideoTaken(video);
        // The File parameter is an MP4 file.
    }
});

camera.startRecordingVideo();
camera.postDelayed(new Runnable() {
    @Override
    public void run() {
        camera.stopRecordingVideo();
    }
}, 2500);
```

#### Other Methods
```java
cameraView.stopVideo();
```

```java
Size cameraView.getPreviewSize();
```

```java
Size cameraView.getCaptureSize();
```

## Extra Attributes

```xml
<com.flurgle.camerakit.CameraView xmlns:camerakit="http://schemas.android.com/apk/res-auto"
    android:id="@+id/camera"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    camerakit:ckFacing="back"
    camerakit:ckFlash="off"
    camerakit:ckFocus="continuous"
    camerakit:ckMethod="standard"
    camerakit:ckZoom="pinch"
    camerakit:ckPermissions="strict"
    camerakit:ckCropOutput="true"  
    camerakit:ckJpegQuality="100"
    camerakit:ckVideoQuality="480p"
    android:adjustViewBounds="true" />
```

|Attribute|Values|Default Value|
|---------|------|-------------|
|[<b>ckFacing</b>](#ckfacing)|[<b>back</b>](#back) [<b>front</b>](#front)|<b>back</b>|
|[<b>ckFlash</b>](#ckflash)|[<b>off</b>](#off) [<b>on</b>](#on) [<b>auto</b>](#auto)|<b>off</b>|
|[<b>ckFocus</b>](#ckfocus)|[<b>off</b>](#off-1) [<b>continuous</b>](#continuous) [<b>tap</b>](#tap)|<b>continuous</b>|
|[<b>ckMethod</b>](#ckmethod)|[<b>standard</b>](#standard) [<b>still</b>](#still) [<b>speed</b>](#speed)|<b>standard</b>|
|[<b>ckZoom</b>](#ckzoom)|[<b>off</b>](#off-2) [<b>pinch</b>](#pinch)|<b>off</b>|
|[<b>ckPermissions</b>](#ckpermissions)|[<b>strict</b>](#strict) [<b>lazy</b>](#lazy) [<b>picture</b>](#picture<b>)|</b>strict`|
|[<b>ckCropOutput</b>](#ckcropoutput)|[<b>true</b>](#true) [<b>false</b>](#false)|<b>false</b>|
|[<b>ckJpegQuality</b>](#ckjpegquality)|[<b>0 <= n <= 100</b>](#ckjpegquality)|<b>100</b>|
|[<b>ckVideoQuality</b>](#ckvideoquality)|[<b>max480p</b>](#max480p) [<b>max720p</b>](#max720p) [<b>max1080p</b>](#max1080p) [<b>max2160p</b>](#max2160p) [<b>highest</b>](#highest) [<b>lowest</b>](#lowest)|<b>max480p</b>|


- - -

### ckFacing
[<b>back</b>](#back) [<b>front</b>](#front)

<b>back</b>

```java
cameraView.setFacing(CameraKit.Constants.FACING_BACK);
```

<b>front</b>

```java
cameraView.setFacing(CameraKit.Constants.FACING_FRONT);
```

<b>Other Methods</b>
```java
int cameraView.getFacing()
```

```java
boolean cameraView.isFacingFront()
```

```java
boolean cameraView.isFacingBack()
```


- - -

### ckFlash
[<b>off</b>](#off) [<b>on</b>](#on) [<b>auto</b>](#auto) [<b>torch</b>](#torch)

<b>off</b>

```java
cameraView.setFlash(CameraKit.Constants.FLASH_OFF);
```

<b>on</b>

```java
cameraView.setFlash(CameraKit.Constants.FLASH_ON);
```

<b>auto</b>

```java
cameraView.setFlash(CameraKit.Constants.FLASH_AUTO);
```

<b>torch</b>
```java
cameraView.setFlash(CameraKit.Constants.FLASH_TORCH);
```

<b>Other Methods</b>
```java
int getFlash()
```

- - -

### ckFocus
[<b>off</b>](#off-1) [<b>continuous</b>](#continuous) [<b>tap</b>](#tap)

<b>off</b>

```java
cameraView.setFocus(CameraKit.Constants.FOCUS_OFF);
```

<b>continuous</b>

```java
cameraView.setFocus(CameraKit.Constants.FOCUS_CONTINUOUS);
```

<b>tap</b>

```java
cameraView.setFocus(CameraKit.Constants.FOCUS_TAP);
```

- - -

### ckMethod
[<b>standard</b>](#standard) [<b>still</b>](#still) [<b>speed</b>](#speed)

<b>standard</b>

```java
cameraView.setMethod(CameraKit.Constants.METHOD_STANDARD);
```

When you use <b>METHOD_STANDARD</b> (<b>camerakit:ckMethod="standard"</b>), images will be captured using the normal camera API capture method using the shutter.

<b>still</b>

```java
cameraView.setMethod(CameraKit.Constants.METHOD_STILL);
```

When you use <b>METHOD_STILL</b> (<b>camerakit:ckMethod="still"</b>), images will be captured by grabbing a single frame from the preview. This behavior is the same as SnapChat and Instagram. This method has a higher rate of motion blur but can be a better experience for users with slower cameras.

<b>speed</b>

- - -

### ckZoom
[<b>off</b>](#off-2) [<b>pinch</b>](#pinch)

<b>off</b>

```java
cameraView.setZoom(CameraKit.Constants.ZOOM_OFF);
```

<b>pinch</b>

```java
cameraView.setZoom(CameraKit.Constants.ZOOM_PINCH);
```

- - -

### ckPermissions
[<b>strict</b>](#strict) [<b>lazy</b>](#lazy) [<b>picture</b>](#picture`)

<b>strict</b>

```java
cameraView.setPermissions(CameraKit.Constants.PERMISSIONS_STRICT);
```

<b>lazy</b>

```java
cameraView.setPermissions(CameraKit.Constants.PERMISSIONS_LAZY);
```

<b>picture</b>

```java
cameraView.setPermissions(CameraKit.Constants.PERMISSIONS_PICTURE);
```

- - -

### ckCropOutput
[<b>true</b>](#true) [<b>false</b>](#false)

<b>true</b>

```java
cameraView.setCropOutput(true);
```

<b>false</b>

```java
cameraView.setCropOutput(false);
```

- - -

### ckJpegQuality

```java
cameraView.setJpegQuality(100);
```

- - -
### ckVideoQuality
[<b>max480p</b>](#max480p) [<b>max720p</b>](#max720p) [<b>max1080p</b>](#max1080p) [<b>max2160p</b>](#max2160p) [<b>lowest</b>](#lowest) [<b>highest</b>](#highest) [<b>qvga</b>](#qvga)

<b>max480p</b>

```java
cameraView.setVideoQuality(CameraKit.Constants.VIDEO_QUALITY_480P);
```

<b>max720p</b>

```java
cameraView.setVideoQuality(CameraKit.Constants.VIDEO_QUALITY_720P);
```

<b>max1080p</b>

```java
cameraView.setVideoQuality(CameraKit.Constants.VIDEO_QUALITY_1080P);
```

<b>max2160p</b>

```java
cameraView.setVideoQuality(CameraKit.Constants.VIDEO_QUALITY_2160P);
```

<b>lowest</b>

```java
cameraView.setVideoQuality(CameraKit.Constants.VIDEO_QUALITY_LOWEST);
```

<b>highest</b>

```java
cameraView.setVideoQuality(CameraKit.Constants.VIDEO_QUALITY_HIGHEST);
```

<b>qvga</b>

```java
cameraView.setVideoQuality(CameraKit.Constants.VIDEO_QUALITY_QVGA);
```

### ckVideoBitRate
[<b>int bitRate</b>](#bitRate)

<b>bitRate</b>

```java
cameraView.setVideoBitrate(CameraKit.Constants.VIDEO_QUALITY_480P);
```


- - -

## Automatic Permissions Behavior

You can handle permissions yourself in whatever way you want, but if you make a call to <b>CameraView.start()</b> without the <b>android.permission.CAMERA</b> permission, an exception would normally be thrown and your app would crash.

With CameraKit, we will automatically prompt for the <b>android.permission.CAMERA</b> permission if it's not available. If you want to handle it yourself, just make sure you don't call <b>CameraView.start()</b> until you acquire the permissions.

## Dynamic Sizing Behavior

You can setup the <b>CameraView</b> dimensions however you want. When your dimensions don't match the aspect ratio of the internal preview surface, the surface will be cropped minimally to fill the view. The behavior is the same as the <b>android:scaleType="centerCrop"</b> on an <b>ImageView</b>.

### adjustViewBounds

You can use a mix of a fixed dimension (a set value or <b>match\_parent</b>) as well as <b>wrap\_content</b>. When you do this ensure that you set <b>android:adjustViewBounds="true"</b> on the <b>CameraView</b>.

When you do this the dimension set to <b>wrap\_content</b> will automatically align with the true aspect ratio of the preview surface. In this case the whole preview will be visible with no cropping.

## Events

Be sure to set up a <b>CameraListener</b> instance to react to different camera events.

```java
camera.setCameraListener(new CameraListener() {

    @Override
    public void onCameraOpened() {
        super.onCameraOpened();
    }

    @Override
    public void onCameraClosed() {
        super.onCameraClosed();
    }

    @Override
    public void onPictureTaken(byte[] picture) {
        super.onPictureTaken(picture);
    }

    @Override
    public void onVideoTaken(File video) {
        super.onVideoTaken(video);
    }

});
```