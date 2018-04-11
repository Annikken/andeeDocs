---
id: andee101Before
title: Before You Code
---

# Andee 101

There is no extra hardware required to run the Andee101. However, there are advertisements that will play when using the Andee101. You can choose to purchase the In-App Purchase to remove the ads.

## Before You Code
In order to use the Andee101 Library in your sketch , we require the following libraries:

1. CurieBLE.h
2. Andee101.h

To include them in the project, insert the following code snippet at the top of your Arduino sketch

```cpp
#include <CurieBLE.h>
#include <Andee101.h>
```

You will then need to add this code in the setup

```cpp
void setup() {
    Andee101.begin();  // Setup communication between Annikken Andee and Arduino
}
```
to start using Andee101 functions.

The final sketch will look like the code below 

```cpp
#include <CurieBLE.h>
#include <Andee101.h>

void setup() {
    Andee101.begin();  // Setup communication between Annikken Andee and Arduino
	//put other setup code here if there are any
}

void loop() {
	// put your main code here, to run repeatedly:
	
}
```

**Note:** These steps are required for each project that you use with Annikken Andee 101. Leaving out these steps results in compile errors.


![](/assets/getting-started/gb-andee-101.png)