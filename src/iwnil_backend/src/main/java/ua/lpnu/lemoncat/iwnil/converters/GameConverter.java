package ua.lpnu.lemoncat.iwnil.converters;

import org.springframework.stereotype.Component;
import ua.lpnu.lemoncat.iwnil.DTO.GameDTO;
import ua.lpnu.lemoncat.iwnil.model.Game;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;
import javax.xml.bind.Unmarshaller;
import java.io.StringReader;
import java.io.StringWriter;
import java.util.Arrays;
import java.util.stream.Collectors;

@Component
public class GameConverter {
    public String objectToXml(GameDTO game) throws JAXBException {
        JAXBContext context = JAXBContext.newInstance(GameDTO.class);
        Marshaller marshaller = context.createMarshaller();

        StringWriter sw = new StringWriter();
        marshaller.marshal(game, sw);
        return sw.toString();
    }

    public GameDTO xmlToObject(String xml) throws JAXBException {
        JAXBContext context = JAXBContext.newInstance(GameDTO.class);
        Unmarshaller unmarshaller = context.createUnmarshaller();
        StringReader reader = new StringReader(xml);
        return (GameDTO) unmarshaller.unmarshal(reader);
    }

    public GameDTO toDTO(Game game) {

        int boardLength = game.getBoard().length;
        String[] boardDTO = new String[boardLength];

        for(int i = 0; i < boardLength; i++) {
            boardDTO[i] = Arrays.stream(game.getBoard()[i]).mapToObj(Integer::toString).collect(Collectors.joining());
        }

        return GameDTO.builder()
                .gameStatus(game.getGameStatus())
                .firstPlayer(game.getFirstPlayer())
                .secondPlayer(game.getSecondPlayer())
                .nextMove(game.getNextMove())
                .board(boardDTO)
                .build();
    }
}
