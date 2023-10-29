#include <Arduino.h>

String inputString = "";
bool stringComplete = false;

void setup()
{
  Serial.begin(115200);
  Serial.setTimeout(1000);
  Serial.print(1111);
  Serial.flush();

  inputString.reserve(200);
}

void loop()
{
  if (Serial.available() > 0)
  {
    String message = Serial.readStringUntil(';');

    delay(100);
    Serial.print("%[Nano]");
    Serial.print(message);
    Serial.print("&");
  }
}