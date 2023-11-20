#include "game/dto/NewGameDTO.h"

NewGameDTO *NewGameDTO::parseXML(String xml)
{
    XMLDocument xmlDoc;

    xmlDoc.Parse(xml.c_str());
    XMLElement *rootElement = xmlDoc.FirstChildElement("newGameDTO");
    NewGameDTO *newGameDTO = new NewGameDTO();

    XMLElement *childElement = rootElement->FirstChildElement();
    XMLElement *boardChildElement;
    while (childElement != nullptr)
    {
        String elementName = childElement->Name();
        String value = childElement->GetText();

        if (elementName == "aiType")
        {
            newGameDTO->aiType = value;
        }
        else if (elementName == "firstPlayer")
        {
            newGameDTO->firstPlayer = value;
        }
        else if (elementName == "secondPlayer")
        {
            newGameDTO->secondPlayer = value;
        }

        childElement = childElement->NextSiblingElement();
    }

    return newGameDTO;
}