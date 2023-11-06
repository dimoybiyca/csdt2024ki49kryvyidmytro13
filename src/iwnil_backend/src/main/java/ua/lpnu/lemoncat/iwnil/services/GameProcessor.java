package ua.lpnu.lemoncat.iwnil.services;

import org.springframework.stereotype.Component;
import ua.lpnu.lemoncat.iwnil.data.CellTypes;
import ua.lpnu.lemoncat.iwnil.data.GameStatus;
import ua.lpnu.lemoncat.iwnil.model.Game;

import java.util.Deque;
import java.util.LinkedList;

@Component
public class GameProcessor {

    private Game game;
    private FixedQueue<Coordinates> crossQueue = new FixedQueue<>(10);
    private FixedQueue<Coordinates> digQueue = new FixedQueue<>(10);

    public Game process(Game game) {
        this.game = game;
        processNewMove();
        checkToe();
        changeNextPlayer();
        resize();

        return game;
    }

    private void resize() {
        resizeLeft(game.getBoard());
        resizeTop(game.getBoard());
        resizeBottom(game.getBoard());
        resizeRight(game.getBoard());
    }

    private void resizeTop(int[][] board) {
        boolean needResize = false;
        for(int y = 0; y < 3; y++) {
            for(int x = 0; x < board[0].length; x++) {
                if(board[y][x] != CellTypes.EMPTY.getValue()) {
                    needResize = true;
                    break;
                }
            }
        }

        if(needResize) {
            int[][] newBoard = new int[board.length + 5][board[0].length];

            for(int y = 0; y < newBoard.length; y++) {
                for(int x = 0; x < newBoard[0].length; x++) {
                    if(y >= newBoard.length - board.length) {
                        newBoard[y][x] = board[y - 5][x];

                    } else {
                        newBoard[y][x] = CellTypes.EMPTY.getValue();

                    }
                }
            }

            game.setBoard(newBoard);
        }
    }

    private void resizeBottom(int[][] board) {
        boolean needResize = false;
        for(int y = board.length - 3; y < board.length; y++) {
            for(int x = 0; x < board[0].length; x++) {
                if(board[y][x] != CellTypes.EMPTY.getValue()) {
                    needResize = true;
                    break;
                }
            }
        }

        if(needResize) {
            int[][] newBoard = new int[board.length + 5][board[0].length];

            for(int y = 0; y < newBoard.length; y++) {
                for(int x = 0; x < newBoard[0].length; x++) {
                    if(y >= board.length) {
                        newBoard[y][x] = CellTypes.EMPTY.getValue();
                    } else {
                        newBoard[y][x] = board[y][x];
                    }
                }
            }

            game.setBoard(newBoard);
        }
    }

    private void resizeLeft(int[][] board) {
        boolean needResize = false;
        for(int y = 0; y < board.length; y++) {
            for(int x = 0; x < 3; x++) {
                if(board[y][x] != CellTypes.EMPTY.getValue()) {
                    needResize = true;
                    break;
                }
            }
        }

        if(needResize) {
            int[][] newBoard = new int[board.length][board[0].length + 5];

            for(int y = 0; y < newBoard.length; y++) {
                for(int x = 0; x < newBoard[0].length; x++) {
                    if(x >= newBoard[0].length - board[0].length) {
                        newBoard[y][x] = board[y][x - 5];
                    } else {
                        newBoard[y][x] = CellTypes.EMPTY.getValue();
                    }
                }
            }

            game.setBoard(newBoard);
        }
    }

    private void resizeRight(int[][] board) {
        boolean needResize = false;
        for(int y = 0; y < board.length; y++) {
            for(int x = board[0].length - 3; x < board[0].length; x++) {
                if(board[y][x] != CellTypes.EMPTY.getValue()) {
                    needResize = true;
                    break;
                }
            }
        }

        if(needResize) {
            int[][] newBoard = new int[board.length][board[0].length + 5];

            for(int y = 0; y < newBoard.length; y++) {
                for(int x = 0; x < newBoard[0].length; x++) {
                    if(x >= board[0].length) {
                        newBoard[y][x] = CellTypes.EMPTY.getValue();
                    } else {
                        newBoard[y][x] = board[y][x];
                    }
                }
            }

            game.setBoard(newBoard);
        }
    }

    private void checkToe() {
        CellTypes cellType = game.getNextMove() == 1 ? CellTypes.TIC : CellTypes.TAC;

        if(checkRow(cellType) || checkCol(cellType) || checkDiag(cellType)) {
            finishGame(cellType);
        }
    }

    private boolean checkRow(CellTypes cellType) {
        int[][] board = game.getBoard();

        for(int y = 0; y < board.length; y++) {
            int count = 0;
            for(int x = 0; x < board[0].length; x++) {
                this.crossQueue.add(new Coordinates(x, y));

                if(board[y][x] == cellType.getValue()) {
                    count++;
                } else {
                    count = 0;
                }

                if(x < board[0].length - 1 && board[y][x + 1] != cellType.getValue() && count >= 3) {
                    return true;
                }
            }
        }

        return false;
    }

    private boolean checkCol(CellTypes cellType) {
        int[][] board = game.getBoard();
        crossQueue.clear();

        for(int x = 0; x < board[0].length; x++) {
            int count = 0;
            for(int y = 0; y < board.length; y++) {
                this.crossQueue.add(new Coordinates(x, y));

                if(board[y][x] == cellType.getValue()) {
                    count++;
                } else {
                    count = 0;
                }

                if(y < board.length - 1 && board[y + 1][x] != cellType.getValue() && count >= 3) {
                    return true;
                }
            }
        }

        return false;
    }

    private boolean checkDiag(CellTypes cellType) {
        
    }

    private void changeNextPlayer() {
        this.game.setNextMove(game.getNextMove() == 1 ? 2 : 1);
    }

    private void processNewMove() {
        if(isMANMove()) {
            this.processMANMove();
        }
    }

    private void processMANMove() {
        Coordinates pos = findNewMove();
        game.getBoard()[pos.y][pos.x] = game.getNextMove() == 1 ? CellTypes.TIC.getValue() : CellTypes.TAC.getValue();
    }

    private Coordinates findNewMove() {
        int[][] board = game.getBoard();

        for(int y = 0; y < board.length; y++) {
            for(int x = 0; x < board[0].length; x++) {
                if(board[y][x] == CellTypes.NEW_MOVE.getValue()) {
                    return new Coordinates(x, y);
                }
            }
        }

        throw new RuntimeException("There is no new move");
    }

    private boolean isMANMove() {
        if(game.getNextMove() == 1) {
            return game.getFirstPlayer().equals("MAN");
        } else {
            return game.getSecondPlayer().equals("MAN");
        }
    }

    private void finishGame(CellTypes cellType) {
        int[][] board = game.getBoard();
        game.setGameStatus(game.getNextMove() == 1 ? GameStatus.PLAYER1_WIN : GameStatus.PLAYER2_WIN);

        for(int i = 0; i < 10; i++) {
            Coordinates pos = crossQueue.poll();
            System.out.println(pos.x + " / " + pos.y + ": " + game.getBoard()[pos.y][pos.x]);
            if(game.getBoard()[pos.y][pos.x] == cellType.getValue()) {
                game.getBoard()[pos.y][pos.x] = game.getNextMove() == 1 ? CellTypes.TOE1.getValue() : CellTypes.TOE2.getValue();
            } else {
                break;
            }
        }
    }
}

class Coordinates {
    int x;
    int y;

    public Coordinates(int x, int y) {
        this.x = x;
        this.y = y;
    }
}

class FixedQueue<T> {
    private final Deque<T> queue = new LinkedList<>();
    private final int maxSize;

    public FixedQueue(int maxSize) {
        this.maxSize = maxSize;
    }

    public void add(T element) {
        if(queue.size() >= maxSize) {
            queue.removeLast();
        }
        queue.addFirst(element);
    }

    public T poll() {
        return queue.removeFirst();
    }

    public void clear() {
        queue.clear();
    }
}