package ua.lpnu.lemoncat.iwnil.converters;

import org.springframework.stereotype.Component;
import ua.lpnu.lemoncat.iwnil.DTO.GameDTO;
import ua.lpnu.lemoncat.iwnil.DTO.NewGameDTO;
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

    public String objectToXml(NewGameDTO newGameDTO) throws JAXBException {
        JAXBContext context = JAXBContext.newInstance(NewGameDTO.class);
        Marshaller marshaller = context.createMarshaller();

        StringWriter sw = new StringWriter();
        marshaller.marshal(newGameDTO, sw);
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
        String boardDTO = "";

        for(int i = 0; i < boardLength; i++) {
            boardDTO = boardDTO.concat(Arrays.stream(game.getBoard()[i]).mapToObj(Integer::toString).collect(Collectors.joining()));
        }

        return GameDTO.builder()
                .gameStatus(game.getGameStatus())
                .firstPlayer(game.getFirstPlayer())
                .secondPlayer(game.getSecondPlayer())
                .nextMove(game.getNextMove())
                .aiType(game.getAiType())
                .board(boardDTO)
                .rows(String.valueOf(game.getBoard().length))
                .cols(String.valueOf(game.getBoard()[0].length))
                .build();
    }

    public Game toObject(GameDTO dto) {
        System.out.println(dto);
        int[][] board = new int[Integer.parseInt(dto.getRows())][Integer.parseInt(dto.getCols())];

        for(int y = 0; y < Integer.parseInt(dto.getRows()); y++) {
            for(int x = 0; x < Integer.parseInt(dto.getCols()); x++) {
                board[y][x] = Character.getNumericValue(dto.getBoard().charAt((y * Integer.parseInt(dto.getCols())) + x));
            }
        }

        return Game.builder()
                .aiType(dto.getAiType())
                .firstPlayer(dto.getFirstPlayer())
                .secondPlayer(dto.getSecondPlayer())
                .gameStatus(dto.getGameStatus())
                .nextMove(dto.getNextMove())
                .board(board)
                .build();
    }
}
