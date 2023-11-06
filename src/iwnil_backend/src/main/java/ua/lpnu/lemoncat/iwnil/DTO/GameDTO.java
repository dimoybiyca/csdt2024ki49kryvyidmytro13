package ua.lpnu.lemoncat.iwnil.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.ToString;
import ua.lpnu.lemoncat.iwnil.data.GameStatus;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GameDTO {
    private String firstPlayer;
    private String secondPlayer;
    private Integer nextMove;
    private GameStatus gameStatus;
    private String[] board;

    @XmlElement
    public String getFirstPlayer() {
        return firstPlayer;
    }

    public void setFirstPlayer(String firstPlayer) {
        this.firstPlayer = firstPlayer;
    }

    @XmlElement
    public String getSecondPlayer() {
        return secondPlayer;
    }

    public void setSecondPlayer(String secondPlayer) {
        this.secondPlayer = secondPlayer;
    }

    @XmlElement
    public Integer getNextMove() {
        return nextMove;
    }

    public void setNextMove(Integer nextMove) {
        this.nextMove = nextMove;
    }

    @XmlElement
    public GameStatus getGameStatus() {
        return gameStatus;
    }

    public void setGameStatus(GameStatus gameStatus) {
        this.gameStatus = gameStatus;
    }

    @XmlElement
    public String[] getBoard() {
        return board;
    }

    public void setBoard(String[] board) {
        this.board = board;
    }
}
