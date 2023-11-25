package ua.lpnu.lemoncat.iwnil.DTO;

import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.ToString;
import ua.lpnu.lemoncat.iwnil.data.AIType;
import ua.lpnu.lemoncat.iwnil.data.GameStatus;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
@ToString
@NoArgsConstructor
@Builder
public class GameDTO {
    private String firstPlayer;
    private String secondPlayer;
    private Integer nextMove;
    private String rows;
    private String cols;
    private GameStatus gameStatus;
    private AIType aiType;
    private String board;

    public GameDTO(String firstPlayer, String secondPlayer, Integer nextMove, String rows, String cols, GameStatus gameStatus, AIType aiType, String board) {
        this.firstPlayer = firstPlayer;
        this.secondPlayer = secondPlayer;
        this.nextMove = nextMove;
        this.rows = rows;
        this.cols = cols;
        this.gameStatus = gameStatus;
        this.aiType = aiType;
        this.board = board;
    }

    public void setRows(String rows) {
        this.rows = rows;
    }

    public void setCols(String cols) {
        this.cols = cols;
    }

    @XmlElement()
    public String getRows() {
        return rows;
    }

    @XmlElement
    public String getCols() {
        return cols;
    }

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
    public AIType getAiType() {
        return aiType;
    }

    public void setAiType(AIType aiType) {
        this.aiType = aiType;
    }

    @XmlElement
    public String getBoard() {
        return board;
    }

    public void setBoard(String board) {
        this.board = board;
    }
}
