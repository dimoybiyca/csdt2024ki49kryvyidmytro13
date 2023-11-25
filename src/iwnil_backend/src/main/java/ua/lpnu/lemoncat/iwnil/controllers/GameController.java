package ua.lpnu.lemoncat.iwnil.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ua.lpnu.lemoncat.iwnil.data.AIType;
import ua.lpnu.lemoncat.iwnil.model.Game;
import ua.lpnu.lemoncat.iwnil.services.GameService;

import javax.xml.bind.JAXBException;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = {"*"}, maxAge = 3600)
public class GameController {

    private final GameService service;

    @GetMapping("/new-game")
    public ResponseEntity<Game> newGame1(@RequestParam String firstPlayer,
                                         @RequestParam String secondPlayer,
                                         @RequestParam(defaultValue = "RANDOM") AIType aiType) {
        Game response = service.newGame(firstPlayer, secondPlayer, aiType);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/move")
    public ResponseEntity<Game> move(@RequestBody Game game) {
        Game response = service.move(game);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("pico/new-game")
    public ResponseEntity<Game> picoNewGame(@RequestParam String firstPlayer,
                                            @RequestParam String secondPlayer,
                                            @RequestParam(defaultValue = "RANDOM") AIType aiType) throws JAXBException {
        Game response = service.picoNewGame(firstPlayer, secondPlayer, aiType);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/pico/move")
    public ResponseEntity<Game> picoMove(@RequestBody Game game) throws JAXBException {
        Game response = service.picoMove(game);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
