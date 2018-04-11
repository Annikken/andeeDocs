---
id: andeeMicrobitApi
title: Andee micro:bit API Reference
---

# Andee PXT Package For Makecode
All blocks found in the PXT package can be found here. The blocks will be separated from basic and advanced blocks.

The package uses a namespace called Andee and has a class called widget. Creating a widget requires instantiating the class. However this only applies to users who use the javascript tab.

## Basic Blocks {#basic}
These blocks are in the first page of the Andee package. Thses functions are needed to create the widgets.


### Begin {#begin}
![](/assets/andee-microbit/andeebegin.png)
```js
Andee.begin()
```
This block is required on start to enable the use of the Andee widgets



### Create Widget {#create}
![](/assets/andee-microbit/createwidget2.png)
```js
let widget1 = Andee.createWidget(id,type,position,length,color,title,data,units)
```
This function creates a new widget to display on the Andee app. Due to the limited memory in the microbit, only 5 widgets can be created at a time.

The arguments require the use of several enumerators when using the javascript function. Use the arguments below to make the widget

`id` uses an enumerator `WidgetId`.
```js
enum WidgetId {
Widget_1, Widget_2, Widget_3, Widget_4, Widget_5
}
```

`type` uses an enumerator `WidgetType`
```js
enum WidgetType {
Databox, Databox_Circle, Databox_Header, Button, Button_Circle, Keyboard_In
}
```

`position` uses an enumerator `WidgetPosition`
```js
enum WidgetPosition {
Row0_Column0, Row0_Column1, Row0_Column2, Row0_Column3,

Row1_Column0, Row1_Column1, Row1_Column2, Row1_Column3,

Row2_Column0, Row2_Column1, Row2_Column2, Row2_Column3,

Row3_Column0, Row3_Column1, Row3_Column2, Row3_Column3
}
```
Each row and column represents the smartdevice screen. For example, if the user wants the widget to be at the top right corner of the screen, use `WidgetPosition.Row0_Column3`

`length` uses an enumerator `WidgetLength`
```js
enum WidgetLength {
One_Quarter, Half, Full
}
```
* `Quarter` is approximately 1 quarter of the length of the screen
* `Half` is approximately 1 half of the length of the screen
* `Full` is approximately 1 length of the screen

`color` uses an enumerator `WidgetColor`
```js
enum WidgetColour {
Red, Dark_Red, Orange, Dark_Orange,
Yellow, Dark_Yellow, Green, Dark_Green,
Blue, Dark_Blue, Indigo, Dark_Magenta,
Magenta, Violet
}
```

`title`,`data` and `units` only accept a `String`. If not needed, these 3 arguments can be left empty.



### Create Slider/Analog Circle Widget {#create2}
![](/assets/andee-microbit/createslider2.png)
```js
let widget1 = Andee.createSliderWidget(id,type,position,length,color,title,data,units)
```
This function creates a new slider or analog circle widget to display on the Andee app. Due to the limited memory in the microbit, only 5 widgets can be created at a time.

The arguments require the use of several enumerators when using the javascript function. Use the arguments below to make the widget

`id` uses an enumerator `WidgetId`.
```js
enum WidgetId {
Widget_1, Widget_2, Widget_3, Widget_4, Widget_5
}
```

`type` uses an enumerator `WidgetType`
```js
enum WidgetTypeInput {
Slider, Analog_Dial
}
```

`position` uses an enumerator `WidgetPosition`
```js
enum WidgetPosition {
Row0_Column0, Row0_Column1, Row0_Column2, Row0_Column3,

Row1_Column0, Row1_Column1, Row1_Column2, Row1_Column3,

Row2_Column0, Row2_Column1, Row2_Column2, Row2_Column3,

Row3_Column0, Row3_Column1, Row3_Column2, Row3_Column3
}
```
Each row and column represents the smartdevice screen. For example, if the user wants the widget to be at the top right corner of the screen, use `WidgetPosition.Row0_Column3`

`length` uses an enumerator `WidgetLength`
```js
enum WidgetLength {
One_Quarter, Half, Full
}
```
* `Quarter` is approximately 1 quarter of the length of the screen
* `Half` is approximately 1 half of the length of the screen
* `Full` is approximately 1 length of the screen

`color` uses an enumerator `WidgetColor`
```js
enum WidgetColour {
Red, Dark_Red, Orange, Dark_Orange,
Yellow, Dark_Yellow, Green, Dark_Green,
Blue, Dark_Blue, Indigo, Dark_Magenta,
Magenta, Violet
}
```

`title`,`data` and `units` only accept a `String`. If not needed, these 3 arguments can be left empty.



### Update Widget {#update}
![](/assets/andee-microbit/updatewidget.png)
```js
class update()
```
This function will make the widget appear on the screen of the connected device. This function has to be called each time a widget property is changed to reflect the new change



### Remove Widget {#remove}
![](/assets/andee-microbit/removewidget.png)
```js
class remove()
```
This function removes the widget from the screen of the connected device



### Clear Screen {#clear}
![](/assets/andee-microbit/clearwidgets.png)
```js
Andee.clear()
```
This function clears the screen of the Andee app, removing all widgets on it



### Get Keyboard Reply {#getkbd}
![](/assets/andee-microbit/getkeybreply.png)
```js
let replyString = Andee.getKeyboard()
```
This function returns the string that the user inputs in the keyboard widget on the Andee app. This function should be used in the widget event



### Get Slider Value {#getsld}
![](/assets/andee-microbit/getslidervalue.png)
```js
let replyNum = Andee.getSlider()
```
This function returns the value of the slider widget on the Andee app. This function should be used in the widget event



### Widget Events {#event}
![](/assets/andee-microbit/andeeevent.png)
```js
Andee.WidgetEvent(widgetId,actions)
```
This function creates an event for input based widgets like buttons,sliders and keyboard widget.
`widgetId` uses an enumerator `WidgetId`
* Widget_1
* Widget_2
* Widget_3
* Widget_4
* Widget_5

Place the functions to be called in `actions` which will be done when the event is fired.
##### Example
```js
Andee.WidgetEvent(WidgetId.Widget_1, () => {
let reply = Andee.getKeyboard()//reply will store the string from the widget and can now be used
})
```



### Convert Number to String {#convert}
![](/assets/andee-microbit/converttostring.png)
```js
let sendString = Andee.convertNumberToString(value)
```
This function converts a number and returns a string. <br/>
`value` is a `Number`


## Advanced Blocks {#advance}
These blocks are in the second page of the Andee package. Not all the blocks here are needed to create widgets. Most of the bloacks are to change certain properties of the widget. This will be helpful when the user needs to change the colour of a widget during runtime for example.<br/> **Note:** Make sure to always call update() for a widget after changing its properties or else the changes will not show in the app


### Set Title {#settitle}
![](/assets/andee-microbit/settitle.png)
```js
class setTitle(title)
```
This function changes the title of the widget.<br/>
`title` is a `String`



### Set Data {#setdata}
![](/assets/andee-microbit/setdata.png)
```js
class setData(data)
```
This function changes the data of the widget.<br/>
`data` is a `String`



### Set Units {#setunit}
![](/assets/andee-microbit/setunits.png)
```js
class setUnit(units)
```
This function changes the units of the widget.<br/>
`units` is a `String`



### Set Button Mode {#setbtnmode}
![](/assets/andee-microbit/setbuttonmode.png)
```js
class setButtonInputMode(buttonMode)
```
This function sets the button widget to 2 different modes.<br/>
`buttonMode` accepts an enumerator `ButtonMode`
```js
enum ButtonMode {
Acknowledge, MultiPress
}
```
* `Acknowledge` mode makes the button require an acknowledgement after a button press. User will need to send `ack()` to allow the button to be pressed again.
* `MultiPress` is the default mode of the button widget. This allows the user to press the button as many times as possible



### Set Keyboard Mode {#setkbdmode}
![](/assets/andee-microbit/setkeybmode.png)
```js
class setKeyboardInputMode(kbMode)
```
This function sets the keyboard widget to one of the 4 possible modes<br/>
`kbMode` accepts an enumerator `KeyboardMode`
```js
enum KeyboardMode {
AlphaNumeric, AlphaNumeric_PW, Numeric, Numeric_PW
}
```
* `AlphaNumeric` is the default mode of the keyboard widget. This mode sets the keyboard on the widget to the AlphaNumeric keyboard
* `AlphaNumeric_PW` mode sets the keyboard on the widget to AlphaNumeric and also hides the typed keys after a few seconds
* `Numeric` mode sets the keyboard on the widget to the Numeric keyboard
* `Numeric_PW` mode sets the keyboard on the widget to Numeric and also hides the typed keys after a few seconds



### Set Slider Mode {#setsldmode}
![](/assets/andee-microbit/setslidermode.png)
```js
class setSliderInputMode(sliderMode)
```
This function sets the slider widget to one of the 3 possible modes<br/>
`sliderMode` accepts an enumerator `SliderMode`
```js
enum SliderMode {
On_Finger_Release, On_Value_Change, No_Thumb_Slider
}
```
* `On_Finger_Release` is the default mode of the slider widget. This mode will send back the updated value of the slider when the user releases the slider thumb
* `On_Value_Change` mode will send back the updated value of the slider every time the slider thumb moves
* `No_Thumb_Slider` mode will remove the slider thumb so that the user can use the slider widget like a progress bar



### Set X Coordinate of Widget {#setxcoord}
![](/assets/andee-microbit/setcoordx.png)
```js
class setCoordX(xCoord)
```
This function sets the X coordinate of the widget. This allows the user to finely tune the position of the widget.<br/>
`xCoord` is a `Number`<br/>
**Note:** The widget's origin is at the top left hand corner so the length and width of the widget have to be calculated properly to prevent it from overlapping other widgets




### Set Y Coordinate of Widget {#setycoord}
![](/assets/andee-microbit/setcoordy.png)
```js
class setCoordY(yCoord)
```
This function sets the Y coordinate of the widget. This allows the user to finely tune the position of the widget.<br/>
`yCoord` is a `Number`<br/>
**Note:** The widget's origin is at the top left hand corner so the length and width of the widget have to be calculated properly to prevent it from overlapping other widgets



### Set Widget Width {#setwidth}
![](/assets/andee-microbit/setwidth.png)
```js
class setWidth(width)
```
This function sets the width of the widget. <br/>
`width` is a `Number`
**Note:** Make sure to change the x and y coordinates of the widget if it overlaps another widget



### Set Widget Height {#setheight}
![](/assets/andee-microbit/setheight.png)
```js
class setHeight(height)
```
This function sets the height of the widget. <br/>
`height` is a `Number`
**Note:** Make sure to change the x and y coordinates of the widget if it overlaps another widget



### Set Widget Colour {#setcolour}
![](/assets/andee-microbit/setColour.png)
```js
class setColour(color)
```
This function changes the colour of the widget. Select from the available colours in the enumerator `WidgetColour`
```js
enum WidgetColour {
Red, Dark_Red,
Orange, Dark_Orange,
Yellow, Dark_Yellow,
Green, Dark_Green,
Blue, Dark_Blue,
Indigo, Dark_Magenta,
Magenta, Violet,
}
```



### Update Widget after X Loops {#updateloop}
![](/assets/andee-microbit/updateloop.png)
```js
class updateLoop(loops)
```
This function changes the amount of loops needed to lapse before sending the update BLE packet to the app. Constantly sending update packets to the connected device will slow down both the app and the microbit. Pausing the program is also inefficient due to blocking. Hence, by sending the update packets after some loops, the BLE is not overcrowded and the microbit can continue doing its other functions properly.<br/>
`loops` is a `Number`



### Send Acknowledgement {#setack}
![](/assets/andee-microbit/sendack.png)
```js
class ack()
```
This function sends an acknowledgement to the Andee app when this function is called. Call this function when using a button widget that is in acknowledge mode. When the device receives this packet, ti will release the corresponding button so that the user can tap it again



###Force a Widget to Update {#forceupd}
![](/assets/andee-microbit/forceupdate.png)
```js
class forceUpdate()
```
This function forces a widget to update when called. Useful when changes to a widget is made during runtime. Due to the nature of the widget updates, the widget might take several lops before updating. For the change to reflect on the app the fastest, call this function






