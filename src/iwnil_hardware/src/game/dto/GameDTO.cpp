#include "game/dto/GameDTO.h"

GameDTO::GameDTO()
{
    board = String("");
}

GameDTO::GameDTO(Game *game)
{
    String newBoard = "";
    byte **map = game->getBoard()->getMap();
    for (int i = 0; i < game->getBoard()->getRows(); i++)
    {
        for (int j = 0; j < game->getBoard()->getCols(); j++)
        {
            newBoard.concat(map[i][j]);
        }
    }

    this->firstPlayer = game->getFirstPlayer();
    this->secondPlayer = game->getSecondPlayer();
    this->gameStatus = game->getGameStatus();
    this->nextMove = game->getNextMove();
    this->aiType = game->getAIType();
    this->rows = game->getBoard()->getRows();
    this->cols = game->getBoard()->getCols();
    this->board = newBoard;
}

GameDTO::GameDTO(String aiType,
                 String board,
                 String firstPlayer,
                 String gameStatus,
                 int nextMove,
                 String secondPlayer,
                 int rows,
                 int cols)
{
    this->aiType = aiType;
    this->firstPlayer = firstPlayer;
    this->secondPlayer = secondPlayer;
    this->gameStatus = gameStatus;
    this->nextMove = nextMove;
    this->rows = rows;
    this->cols = cols;
    this->board = board;
}

GameDTO *GameDTO::parseXML(String xml)
{
    XMLDocument xmlDoc;

    xmlDoc.Parse(xml.c_str());
    XMLElement *rootElement = xmlDoc.FirstChildElement("gameDTO");
    GameDTO *gameDTO = new GameDTO();

    XMLElement *childElement = rootElement->FirstChildElement();
    while (childElement != nullptr)
    {
        String elementName = childElement->Name();
        String elementText = childElement->GetText();

        if (elementName == "aiType")
        {
            gameDTO->aiType = elementText;
        }
        else if (elementName == "board")
        {
            gameDTO->board = elementText;
        }
        else if (elementName == "firstPlayer")
        {
            gameDTO->firstPlayer = elementText;
        }
        else if (elementName == "gameStatus")
        {
            gameDTO->gameStatus = elementText;
        }
        else if (elementName == "nextMove")
        {
            gameDTO->nextMove = childElement->IntText();
        }
        else if (elementName == "secondPlayer")
        {
            gameDTO->secondPlayer = elementText;
        }
        else if (elementName == "rows")
        {
            gameDTO->rows = childElement->IntText();
        }
        else if (elementName == "cols")
        {
            gameDTO->cols = childElement->IntText();
        }

        childElement = childElement->NextSiblingElement();
    }

    return gameDTO;
}

String GameDTO::toXml()
{
    String xmlString = "";

    xmlString += "<gameDTO>";
    xmlString += "<rows>" + String(this->rows) + "</rows>";
    xmlString += "<cols>" + String(this->cols) + "</cols>";
    xmlString += "<aiType>" + this->aiType + "</aiType>";
    xmlString += "<board>" + this->board + "</board>";
    xmlString += "<firstPlayer>" + this->firstPlayer + "</firstPlayer>";
    xmlString += "<gameStatus>" + this->gameStatus + "</gameStatus>";
    xmlString += "<nextMove>" + String(this->nextMove) + "</nextMove>";
    xmlString += "<secondPlayer>" + this->secondPlayer + "</secondPlayer>";
    xmlString += "</gameDTO>";

    return xmlString;
}

Game *GameDTO::toObject()
{
    return new Game(this->gameStatus, this->firstPlayer, this->secondPlayer, this->nextMove, this->aiType, new Board(this->board, this->rows, this->cols));
}