# CameraKit Documentation - v0.13.4

1. [Setup](#setup)
2. [Usage](#usage)
3. [Capturing Images](#capturingimages)
4. [Extra Attributes](#extraattributes)
5. [Permissions](#permissions)
6. [Sizing](#sizing)
7. [Events](#events)

## Setup

Add __CameraKit__ to the dependencies block in your <b>app</b> level <b>build.gradle</b>:

```groovy
compile 'com.wonderkiln:camerakit:0.13.4'
```

## Usage

To use CameraKit, add a <b>CameraView</b> to your layout:

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

To capture an image call <b>CameraView.captureImage()</b>. Then setup a <b>CameraListener</b> to handle the image callback.

<b>Example</b>
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

To capture video call <b>CameraView.startRecordingVideo()</b> to start, and <b>CameraView.stopRecordingVideo()</b> to finish. Setup a <b>CameraListener</b> to handle the video callback.


<b>Example</b>
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

### Additional Video Methods

| Function | Description | Example |
| --- | --- | --- |
| stopVideo| Stop recording video | cameraView.stopVideo() |
| getPreviewSize | Get size of camera preview | Size cameraView.getPreviewSize(); |
| getCaptureSize | Get size of capture | cameraView.getCaptureSize(); |

## CamerView Attributes

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
|[ckFacing](#ckfacing)|<b>back</b>, <b>front</b>|<b>back</b>|
|[ckFlash](#ckflash)|<b>off</b>, <b>on</b>, <b>auto</b>|<b>off</b>|
|[ckFocus](#ckfocus)|<b>off</b>, <b>continuous</b>, <b>tap</b>|<b>continuous</b>|
|[ckMethod](#ckmethod)|<b>standard</b>, <b>still</b>, <b>speed</b>|<b>standard</b>|
|[ckZoom](#ckzoom)|<b>off</b>, <b>pinch</b>|<b>off</b>|
|[ckPermissions](#ckpermissions)|<b>strict</b>, <b>lazy</b>, <b>picture</b>|<b>strict</b>|
|[ckCropOutput](#ckcropoutput)|<b>true</b>, <b>false</b>|<b>false</b>|
|[ckJpegQuality](#ckjpegquality)|<b>0 <= n <= 100</b>|<b>100</b>|
|[ckVideoQuality](#ckvideoquality)|<b>max480p</b>, <b>max720p</b>, <b>max1080p</b>, <br/> <b>max2160p</b>, <b>highest</b>, <b>lowest</b>, <b>qvga</b>|<b>max480p</b>|


- - -

### ckFacing
<b>Option:</b> back, front
```java
cameraView.setFacing(CameraKit.Constants.FACING_BACK);
cameraView.setFacing(CameraKit.Constants.FACING_FRONT);
```

<b>Other Methods</b>
```java
int cameraView.getFacing()
boolean cameraView.isFacingFront()
boolean cameraView.isFacingBack()
```


- - -

### ckFlash
<b>Values:</b> off, on, auto, torch

```java
cameraView.setFlash(CameraKit.Constants.FLASH_OFF);
cameraView.setFlash(CameraKit.Constants.FLASH_ON);
cameraView.setFlash(CameraKit.Constants.FLASH_AUTO);
cameraView.setFlash(CameraKit.Constants.FLASH_TORCH);
```

<b>Other Methods</b>
```java
int getFlash()
```

- - -

### ckFocus
<b>Values:</b> off, continuous, tap


```java
cameraView.setFocus(CameraKit.Constants.FOCUS_OFF);
cameraView.setFocus(CameraKit.Constants.FOCUS_CONTINUOUS);
cameraView.setFocus(CameraKit.Constants.FOCUS_TAP);
```

- - -

### ckMethod
<b>Values:</b> standard, still, speed

<b>standard</b>

When you use <b>METHOD_STANDARD</b> (<b>camerakit:ckMethod="standard"</b>), images will be captured using the normal camera API capture method using the shutter.

```java
cameraView.setMethod(CameraKit.Constants.METHOD_STANDARD);
```

<b>still</b>

When you use <b>METHOD_STILL</b> (<b>camerakit:ckMethod="still"</b>), images will be captured by grabbing a single frame from the preview. This behavior is the same as SnapChat and Instagram. This method has a higher rate of motion blur but can be a better experience for users with slower cameras.


```java
cameraView.setMethod(CameraKit.Constants.METHOD_STILL);
```

- - -

### ckZoom
<b>Values:</b> off, pinch

```java
cameraView.setZoom(CameraKit.Constants.ZOOM_OFF);
cameraView.setZoom(CameraKit.Constants.ZOOM_PINCH);
```

- - -

### ckPermissions
<b>Values:</b> strict, lazy, picture


```java
cameraView.setPermissions(CameraKit.Constants.PERMISSIONS_STRICT);
cameraView.setPermissions(CameraKit.Constants.PERMISSIONS_LAZY);
cameraView.setPermissions(CameraKit.Constants.PERMISSIONS_PICTURE);
```

- - -

### ckCropOutput
<b>Values:</b> true, false

```java
cameraView.setCropOutput(true);
cameraView.setCropOutput(false);
```

- - -

### ckJpegQuality
<b>Values:</b> <b>int</b> bitRate

```java
cameraView.setJpegQuality(100);
```

- - -
### ckVideoQuality
<b>Values:</b> max480p, max720p, max1080p, max2160p, lowest, highest, qvga

```java
cameraView.setVideoQuality(CameraKit.Constants.VIDEO_QUALITY_480P);
cameraView.setVideoQuality(CameraKit.Constants.VIDEO_QUALITY_720P);
cameraView.setVideoQuality(CameraKit.Constants.VIDEO_QUALITY_1080P);
cameraView.setVideoQuality(CameraKit.Constants.VIDEO_QUALITY_2160P);
cameraView.setVideoQuality(CameraKit.Constants.VIDEO_QUALITY_LOWEST);
cameraView.setVideoQuality(CameraKit.Constants.VIDEO_QUALITY_HIGHEST);
cameraView.setVideoQuality(CameraKit.Constants.VIDEO_QUALITY_QVGA);
```

### ckVideoBitRate
<b>Values</b>: <b>int</b> bitRate

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