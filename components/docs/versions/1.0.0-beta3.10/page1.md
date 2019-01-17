# CameraKit Documentation - v1.0.0-beta3.10

1. [Setup](#setup)
2. [Basic Usage](#basicusage)
3. [Capturing Images](#capturingimages)
4. [Attributes](#attributes)
5. [Permissions](#permissions)
6. [Event Listeners](#eventlisteners)
7. [Additional Notes](#additionalnotesandcommonissues)

## Setup
Add CameraKit and Kotlin to the dependencies section of your <b>build.gradle</b>.
```groovy
dependencies {
    implementation 'com.camerakit:camerakit:1.0.0-beta3.10'
    implementation 'com.camerakit:jpegkit:0.1.0'
    implementation 'org.jetbrains.kotlin:kotlin-stdlib-jdk7:1.3.0'
    implementation 'org.jetbrains.kotlinx:kotlinx-coroutines-android:1.0.0'
}
```

## Basic Usage
CameraKit relies on a <b>CameraKitView</b> in the XML layout. 

```xml
<com.camerakit.CameraKitView
    android:id="@+id/camera"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:adjustViewBounds="true"/>
```

Initialize the <b>CameraKitView</b> in the Java activity. <b>v1.0.0-beta3.10</b> requires five methods to be overloaded; four handling state, and one handling permissions.

```java
public class MainActivity extends AppCompatActivity {
    private CameraKitView cameraKitView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        cameraKitView = findViewById(R.id.camera);
    }

    @Override
    protected void onStart() {
        super.onStart();
        cameraKitView.onStart();
    }

    @Override
    protected void onResume() {
        super.onResume();
        cameraKitView.onResume();
    }

    @Override
    protected void onPause() {
        cameraKitView.onPause();
        super.onPause();
    }

    @Override
    protected void onStop() {
        cameraKitView.onStop();
        super.onStop();
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        cameraKitView.onRequestPermissionsResult(requestCode, permissions, grantResults);
    }
}
```

The <b>CameraKitView</b> will exist in your activity and display the output of the Camera Preview. See all options in the <b>Attributes</b> section.

## Capturing Images
Capturing images is done through the <b>cameraKitView.captureImage</b> callback
```java
cameraKitView.captureImage(new  CameraKitView.ImageCallback() {
    @Override
    public void onImage(CameraKitView cameraKitView, final byte[] capturedImage) {
        // capturedImage contains the image from the CameraKitView.
    }
})
```

### Example
```java
// From button OnClickListener
private View.OnClickListener photoOnClickListener = new View.OnClickListener() {
    @Override
    public void onClick(View v) {
        cameraKitView.captureImage(new CameraKitView.ImageCallback() {
            @Override
            public void onImage(CameraKitView cameraKitView, final byte[] capturedImage) {
                File savedPhoto = new File(Environment.getExternalStorageDirectory(), "photo.jpg");
                try {
                    FileOutputStream outputStream = new FileOutputStream(savedPhoto.getPath());
                    outputStream.write(capturedImage);
                    outputStream.close();
                } catch (java.io.IOException e) {
                    e.printStackTrace();
                }
            }
        });
    }
};
```

## Attributes

### setFacing 

| Format | Method | 
| :--- | :--- |
| XML | app:camera_facing="back" |
| Java | cameraKitView.setFacing(CameraKit.FACING_BACK) | 

<b>Possible values:</b> 
* back, FACING_BACK
* front, FACING_FRONT
- - -

### toggleFacing

| Format | Method | 
| :--- | :--- |
| XML | none |
| Java | cameraKitView.toggleFacing() | 
- - - 


### setFlash
| Format | Method | 
| :--- | :--- |
| XML | app:camera_flash="off" |
| Java | cameraKitView.setFlash(CameraKit.FLASH_OFF) | 

<b>Possible values:</b> 
* off, FLASH_OFF
* on, FLASH_ON
- - - 

### setFocus 

| Format | Method | 
| :--- | :--- |
| XML | app:camera_focus="auto" |
| Java | cameraKitView.setFocus(CameraKit.FOCUS_AUTO) | 

<b>Possible values:</b> 
* auto, FOCUS_AUTO
* continuous, FOCUS_CONTINUOUS
* off, FOCUS_OFF
- - - 

### zoomFactor

| Format | Method | 
| :--- | :--- |
| XML | app:camera_zoomFactor="1" |
| Java | cameraKitView.setZoomFactor(1.0f) | 

<b>Possible values:</b> 
* <b>float</b>: [0,100]
- - - 

### aspectRatio

| Format | Method | 
| :--- | :--- |
| XML | app:camera_aspectRatio="1" |
| Java | cameraKitView.setAspectRatio(1f) | 

<b>Possible values:</b> 
* <b>float</b>: [0,inf]
- - - 

### imageMegaPixels

| Format | Method | 
| :--- | :--- |
| XML | app:camera_imageMegaPixels="2" |
| Java | cameraKitView.setImageMegaPixels(2f) | 

<b>Possible values:</b> 
* <b>float</b>: [0,100]
- - - 

### imageJpegQuality

| Format | Method | 
| :--- | :--- |
| XML | app:camera_imageJpegQuality="100" |
| Java | none | 

<b>Possible values:</b> 
* <b>int</b>: [0,100]
- - - 

### sensorPreset

| Format | Method | 
| :--- | :--- |
| XML | none |
| Java | cameraKitView.setSensorPreset(CameraKit.SENSOR\_PRESET\_NONE) | 

<b>Possible values:</b> 
* SENSOR\_PRESET\_NONE
* ...ACTION, PORTRAIT, LANDSCAPE, NIGHT, NIGHT_PORTRAIT, THEATRE, BEACH, SNOW, SUNSET, STEADYPHOTO, FIREWORKS, SPORTS, PARTY, CANDLELIGHT, BARCODE
- - - 

### previewEffect

| Format | Method | 
| :--- | :--- |
| XML | none |
| Java | cameraKitView.setPreviewEffect(CameraKit.PREVIEW\_EFFECT\_NONE) | 

<b>Possible values:</b>
* PREVIEW\_EFFECT\_NONE
*  ...MONO, SOLARIZE, SEPIA, POSTERIZE, WHITEBOARD, BLACKBOARD, AQUA
- - - 

### setAdjustViewBounds

<b>setAdjustViewBounds(Boolean adjustViewBounds)</b>

<b>Possible parameters:</b>
* Boolean
- - - 


## Permissions

### setPermissions

| Format | Method | 
| :--- | :--- |
| XML | app:permissions="camera" |
| Java | cameraKitView.setPermissions() | 

<b>Possible values:</b> 
* camera
* all
* audio
* location
* storage
* none

### requestPermissions

<b>cameraKitView.requestPermissions(Activity)</b>

<b>Possible parameters:</b>
* Activity

### onRequestPermissionsResult

cameraKitView.onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults)

```java
@Override
public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
    super.onRequestPermissionsResult(requestCode, permissions, grantResults);
    cameraKitView.onRequestPermissionsResult(requestCode, permissions, grantResults);
}
```

## Event Listeners
### GestureListener

```java
cameraKitView.setGestureListener(new CameraKitView.GestureListener() {
    @Override
    public void onTap(CameraKitView cameraKitView, float v, float v1) {

    }

    @Override
    public void onLongTap(CameraKitView cameraKitView, float v, float v1) {

    }

    @Override
    public void onDoubleTap(CameraKitView cameraKitView, float v, float v1) {

    }

    @Override
    public void onPinch(CameraKitView cameraKitView, float v, float v1, float v2) {

    }
});
```


### CameraListener

```
cameraKitView.setCameraListener(new CameraKitView.CameraListener() {
    @Override
    public void onOpened() {

    }

    @Override
    public void onClosed() {

    }
});

```

### PreviewListener

```java
cameraKitView.setPreviewListener(new CameraKitView.PreviewListener() {
    @Override
    public void onStart() {

    }

    @Override
    public void onStop() {

    }
});
```

### ErrorListener

```java
cameraKitView.setErrorListener(new CameraKitView.ErrorListener() {
    @Override
    public void onError(CameraKitView cameraKitView, CameraKitView.CameraException e) {
        
    }
});
```

## Additional Notes and Common Issues
### onConfigurationChanged
In <b>beta3.10</b> setting <b>onConfigurationChanged</b> to watch for screen size changes in <b>AndroidManifest.xml</b> will produce unexpected output when rotating the device on Android version 7.0 or higher. 

If you encounter issues with rotation, first ensure the following line is NOT in your <b>AndroidManifest.xml</b>.

```xml
<activity>
    android:configChanges="orientation|screenLayout"
</activity>
```

