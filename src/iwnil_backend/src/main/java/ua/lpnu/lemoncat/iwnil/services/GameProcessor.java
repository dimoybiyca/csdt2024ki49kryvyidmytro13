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
    private int numCols;
    private int numRows;
    private final FixedQueue<Coordinates> crossQueue = new FixedQueue<>(10);

    public Game process(Game game) {
        initData(game);
        //processNewMove();
        //checkToe();
        //changeNextPlayer();
        resize();

        return game;
    }

    private void initData(Game game) {
        this.game = game;
        this.numCols = game.getBoard()[0].length;
        this.numRows = game.getBoard().length;
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
        for(int[] ints : board) {
            for(int x = 0; x < 3; x++) {
                if(ints[x] != CellTypes.EMPTY.getValue()) {
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
        for(int[] ints : board) {
            for(int x = board[0].length - 3; x < board[0].length; x++) {
                if(ints[x] != CellTypes.EMPTY.getValue()) {
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
        return checkDiagRight(cellType) || checkDiagLeft(cellType);
    }

    private boolean checkDiagLeft(CellTypes cellType) {
        for(int d = 0; d < numRows + numCols - 1; d++) {
            int row = Math.max(0, d - numCols + 1);
            int col = Math.min(d, numCols - 1);

            int count = 0;
            crossQueue.clear();
            while(row < numRows && col >= 0) {
                count = updateCount(count, col, row, cellType);

                if(++row < numRows &&
                        --col > 0 &&
                        this.game.getBoard()[row][col] != cellType.getValue() &&
                        count >= 3) {
                    return true;
                }
            }
        }

        return false;
    }

    private boolean checkDiagRight(CellTypes cellType) {
        for(int d = numRows - 1; d >= 0; d--) {
            if(checkDiagLine(d, 0, cellType)) {
                return true;
            }
        }

        for(int d = 1; d < numCols; d++) {
            if(checkDiagLine(0, d, cellType)) {
                return true;
            }
        }

        return false;
    }

    private boolean checkDiagLine(int row, int col, CellTypes cellType) {
        int count = 0;
        crossQueue.clear();
        while(row < numRows && col < numCols) {
            count = updateCount(count, col, row, cellType);

            if(++row < numRows &&
                    ++col < numCols &&
                    this.game.getBoard()[row][col] != cellType.getValue() &&
                    count >= 3) {
                return true;
            }
        }

        return false;
    }

    private int updateCount(int count, int x, int y, CellTypes cellType) {
        this.crossQueue.add(new Coordinates(x, y));

        return this.game.getBoard()[y][x] == cellType.getValue() ? count + 1 : 0;
    }


    private void processNewMove() {
        if(isMANMove()) {
            this.processMANMove();
        } else if(isAIMove()) {
            this.processAIMove();
        }

        if(game.getSecondPlayer().equals("AI")) {
            this.changeNextPlayer();
            this.processAIMove();
        }
    }

    private void processMANMove() {
        Coordinates pos = findNewMove();
        game.getBoard()[pos.y][pos.x] = game.getNextMove() == 1 ? CellTypes.TIC.getValue() : CellTypes.TAC.getValue();
    }

    private void processAIMove() {
        CellTypes cellType = game.getNextMove() == 1 ? CellTypes.TAC : CellTypes.TIC;

        switch(game.getAiType()) {
            case RANDOM -> processAIRandomMove(cellType);
            case BEST_MOVE -> processAIBestMove(cellType);
        }
    }

    private void processAIRandomMove(CellTypes cellType) {
        while(true) {
            for(int y = (int) Math.round(Math.random() * (this.numRows - 1)); y < numRows; y++) {
                for(int x = (int) Math.round(Math.random() * (this.numCols - 1)); y < numCols; y++) {
                    if(game.getBoard()[y][x] == CellTypes.EMPTY.getValue()) {
                        game.getBoard()[y][x] = cellType.getValue();
                        return;
                    }
                }
            }
        }
    }

    private void processAIBestMove(CellTypes cellType) {
        while(true) {
            for(int y = (int) Math.round(Math.random() * (this.numRows - 1)); y < numRows; y++) {
                for(int x = (int) Math.round(Math.random() * (this.numCols - 1)); y < numCols; y++) {
                    if(game.getBoard()[y][x] == cellType.getValue()) {
                        for(int i = -1; i <= 1; i++) {
                            for(int j = -1; j <= 1; j++) {
                                if(y + i > 0 && y + i < numRows && x + j > 0 && x + j < numCols) {
                                    if(game.getBoard()[y + i][x + j] == CellTypes.EMPTY.getValue()) {
                                        game.getBoard()[y + 1][x + j] = cellType.getValue();
                                        return;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    private boolean isMANMove() {
        return game.getNextMove() == 1 ? game.getFirstPlayer().equals("MAN") : game.getSecondPlayer().equals("MAN");
    }

    private boolean isAIMove() {
        return game.getNextMove() == 1 ? game.getFirstPlayer().equals("AI") : game.getSecondPlayer().equals("AI");
    }

    private Coordinates findNewMove() {
        Coordinates newMove = findCell(CellTypes.NEW_MOVE);

        if(newMove != null) {
            return newMove;
        }

        throw new RuntimeException("There is no new move");
    }

    private Coordinates findCell(CellTypes cellType) {
        int[][] board = game.getBoard();

        for(int y = 0; y < board.length; y++) {
            for(int x = 0; x < board[0].length; x++) {
                if(board[y][x] == cellType.getValue()) {
                    return new Coordinates(x, y);
                }
            }
        }

        return null;
    }


    private void changeNextPlayer() {
        this.game.setNextMove(game.getNextMove() == 1 ? 2 : 1);
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