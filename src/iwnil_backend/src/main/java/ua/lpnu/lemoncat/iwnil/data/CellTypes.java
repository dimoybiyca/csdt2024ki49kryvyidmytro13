package ua.lpnu.lemoncat.iwnil.data;

public enum CellTypes {
    EMPTY(0),
    TIC(1),
    TAC(2),
    TOE1(3),
    TOE2(5),
    NEW_MOVE(4);

    private final int value;

    CellTypes(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }
}
