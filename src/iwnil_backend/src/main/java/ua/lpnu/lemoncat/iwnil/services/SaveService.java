package ua.lpnu.lemoncat.iwnil.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ua.lpnu.lemoncat.iwnil.model.Game;
import ua.lpnu.lemoncat.iwnil.model.Save;
import ua.lpnu.lemoncat.iwnil.repository.SaveRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SaveService {
    private final SaveRepository saveRepository;

    public Save create(Game game) {
        Save save = Save.builder()
                .firstPlayer(game.getFirstPlayer())
                .secondPlayer(game.getSecondPlayer())
                .nextMove(game.getNextMove())
                .aiType(game.getAiType())
                .board(game.getBoard())
                .gameStatus(game.getGameStatus())
                .build();

        if(save != null) {
            return saveRepository.save(save);
        }

        throw new NullPointerException("Values can not be null");
    }

    public List<Save> findAll() {
        return saveRepository.findAll();
    }

    public void delete(String id) {
        saveRepository.deleteById(id);
    }
}
