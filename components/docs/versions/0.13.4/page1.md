# CameraKit Documentation - v0.13.4

1. [Setup](#setup)
2. [Usage](#usage)
3. [Capturing Images](#capturingimages)
4. [CameraView Attributes](#cameraviewattributes)
5. [Permissions](#automaticpermissionsbehavior)
6. [Sizing](#dynamicsizingbehavior)
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

## CameraView Attributes

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
|[ckVideoBitRate](#ckvideobitrate)|<b>0 <= n <= MAX\_INT</b>|<i>unset</i>

- - -

### ckFacing

| Format | Method | 
| :--- | :--- |
| XML | app:ckFacing="back" |
| Java | cameraView.setFacing(CameraKit.Constants.FACING\_BACK); | 


<b>Possible values:</b> 
* back, FACING\_BACK
* front, FACING\_FRONT

<b>Other Methods</b>
```java
int cameraView.getFacing()
boolean cameraView.isFacingFront()
boolean cameraView.isFacingBack()
```


- - -

### ckFlash
<b>Values:</b> off, on, auto, torch

| Format | Method | 
| :--- | :--- |
| XML | app:ckFlash="off" |
| Java | cameraView.setFlash(CameraKit.Constants.FLASH\_OFF); | 

<b>Possible values:</b> 
* off, FLASH\_OFF
* on, FLASH\_ON
* auto, FLASH\_AUTO
* torch, FLASH\_TORCH

<b>Other Methods</b>
```java
int getFlash()
```

- - -

### ckFocus

| Format | Method | 
| :--- | :--- |
| XML | app:ckFocus="continuous" |
| Java | cameraView.setFocus(CameraKit.Constants.FOCUS\_CONTINUOUS); | 

<b>Possible values:</b> 
* off, FOCUS\_OFF
* continuous, FOCUS\_CONTINUOUS
* tap, FOCUS\_TAP

- - -

### ckMethod

| Format | Method | 
| :--- | :--- |
| XML | app:ckMethod="standard" |
| Java | cameraView.setMethod(CameraKit.Constants.METHOD\_STANDARD); | 

<b>Possible values:</b> 
* standard, METHOD\_STANDARD
* still, METHOD\_STILL
* speed, METHOD\_SPEED


<b>Additional Notes:</b>

When you use <b>METHOD\_STANDARD</b> (<b>camerakit:ckMethod="standard"</b>), images will be captured using the normal camera API capture method using the shutter.


When you use <b>METHOD\_STILL</b> (<b>camerakit:ckMethod="still"</b>), images will be captured by grabbing a single frame from the preview. This behavior is the same as SnapChat and Instagram. This method has a higher rate of motion blur but can be a better experience for users with slower cameras.


- - -

### ckZoom

| Format | Method | 
| :--- | :--- |
| XML | app:ckZoom="off" |
| Java | cameraView.setZoom(CameraKit.Constants.ZOOM\_OFF); | 

<b>Possible values:</b> 
* off, ZOOM_OFF
* pinch, ZOOM\_PINCH

- - -

### ckPermissions

| Format | Method | 
| :--- | :--- |
| XML | app:ckPermissions="strict" |
| Java | cameraView.setPermissions(CameraKit.Constants.PERMISSIONS\_STRICT); | 

<b>Possible values:</b> 
* strict, PERMISSIONS\_STRICT
* lazy, PERMISSIONS\_LAZY
* picture, PERMISSIONS\_PICTURE

- - -

### ckCropOutput

| Format | Method | 
| :--- | :--- |
| XML | app:ckCropOutput="false" |
| Java | cameraView.setCropOutput(false); | 

<b>Possible values:</b> 
* true
* false

- - -

### ckJpegQuality

| Format | Method | 
| :--- | :--- |
| XML | app:ckJpegQuality="100" |
| Java | cameraView.setJpegQuality(100); | 

<b>Possible values:</b> 
* <b>int</b>: [0, 100]

```java
cameraView.setJpegQuality(100);
```

- - -
### ckVideoQuality

| Format | Method | 
| :--- | :--- |
| XML | app:ckVideoQuality="max480p" |
| Java | cameraView.setVideoQuality(CameraKit.Constants.VIDEO\_QUALITY\_480P); | 

<b>Possible values:</b> 
* max480p, VIDEO\_QUALITY\_480P
* max720p, VIDEO\_QUALITY\_720P
* max1080p, VIDEO\_QUALITY\_1080P
* max2160p, VIDEO\_QUALITY\_2160P
* lowest, VIDEO\_QUALITY\_LOWEST
* highest, VIDEO\_QUALITY\_HIGHEST
* qvga, VIDEO\_QUALITY\_QVGA

<b>Values:</b> max480p, max720p, max1080p, max2160p, lowest, highest, qvga


### ckVideoBitRate

| Format | Method | 
| :--- | :--- |
| XML | app:ckVideoBitRate="100" |
| Java | cameraView.setVideoBitrate(100); | 

<b>Possible values:</b> 
* <b>Values</b>: <b>int</b> [0, MAX\_INT]

Video bit rate is the video recording bit rate in bits per second

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