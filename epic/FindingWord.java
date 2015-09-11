class FindingWord {
    private int[] dx = {0,  0, 1, -1, -1,  1, 1, -1};
    private int[] dy = {1, -1, 0,  0,  1, -1, 1, -1};
    public boolean findWord(char[][] board, String word) {
        if (board == null || board.length == 0) {
            return false;
        }

        if (board[0] == null || board[0].length == 0) {
            return false;
        }

        for (int i = 0 ; i < board.length; ++i) {
            for (int j = 0; j < board[0].length; ++j) {
                if (dfs(i, j, board, word, 0)) {
                    return true;
                }
            }
        }
        return false;
    }

    private boolean dfs(int x, int y, char[][] board, String word, int pos) {
        if (pos == word.length()) {
            return true;
        }
        if (x < 0 || y < 0 || x >= board.length || y >= board[0].length) {
            return false;
        }
        if (board[x][y] == word.charAt(pos)) {
            char tmp = board[x][y];
            board[x][y] = '.';
            for (int  i = 0; i < 8; ++i) {
                if (dfs(x + dx[i], y + dy[i], board, word, pos + 1)) {
                    return true;
                }
            }
            board[x][y] = tmp;
        }
        return false;
    }

    public static void main(String[] args) {
        char[][] board = {
            { 'a', 'b', 'c', 'd' }, 
            { 'e', 'f', 'g', 'h' },
            { 'i', 'j', 'k', 'l' }, 
            { 'm', 'n', 'o', 'p' } 
        };
        FindingWord solution = new FindingWord();
        System.out.print(solution.findWord(board, "abchkn"));
    }
} 