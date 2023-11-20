#include <Arduino.h>

#include "StateManager.h"
#include "game/dto/GameDTO.h"
#include "game/dto/NewGameDTO.h"
#include "game/GameProcessor.h"

StateManager *stateManager;

GameProcessor gameProcessor;
String inputString = "";
bool stringComplete = false;

void setup()
{
  stateManager = StateManager::getInstance();
  gameProcessor = GameProcessor();

  Serial.begin(115200);
  Serial.setTimeout(2000);

  inputString.reserve(2048);
}

void loop()
{
  while (stateManager->getConnectionState() == State::DISCONNECTED)
  {
    Serial.print(1111);
    delay(100);

    if (Serial.available() > 0)
    {
      String message = Serial.readStringUntil(';');

      if (message.length() > 0)
      {
        stateManager->setConnectionState(State::CONNECTED);
      }
    }
    Serial.flush();
  }

  if (Serial.available() > 0)
  {
    String message = Serial.readStringUntil(';');

    if (message.startsWith("<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?><gameDTO>"))
    {
      if (message.endsWith("</gameDTO>"))
      {
        GameDTO *gameDTO = GameDTO::parseXML(message);
        Game *game = gameDTO->toObject();
        game = gameProcessor.process(game);
        GameDTO *newGameDTO = new GameDTO(game);
        message = newGameDTO->toXml();

        Serial.print("%[Pico] ");
        Serial.print(message);
        Serial.print("&");

        delete gameDTO;
        delete game;
        delete newGameDTO;
      }
      else
      {
        Serial.print(message);
      }
    }
    else if (message.startsWith("<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?><newGameDTO>"))
    {
      NewGameDTO *newGameDTO = NewGameDTO::parseXML(message);
      Game *game = Game::newGame(newGameDTO->firstPlayer, newGameDTO->secondPlayer, newGameDTO->aiType);
      GameDTO *dto = new GameDTO(game);
      message = dto->toXml();

      Serial.print("%[Pico] ");
      Serial.print(message);
      Serial.print("&");

      delete newGameDTO;
      delete game;
      delete dto;
    }
    else if (message.startsWith("1111"))
    {
      Serial.print(1111);
    }
    else
    {
      Serial.print("%[Pico] ");
      Serial.print(message);
      Serial.print("&");
    }
  }
}