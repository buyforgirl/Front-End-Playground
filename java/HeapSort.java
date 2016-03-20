public int[] heapsort(int[] array) {
    if (array == null || array.length <= 1) {
    return array;
}
int len = array.length - 1;
heapify(array, len);
for (int i = array.length - 1; i > 0; i--) {
    swap(array, 0, i);
maxHeap(array, 0, --len);
}
return array;
}

private void heapify(int[] array, int len) {
    for (int i = len / 2; i >= 0; i--) {
    maxHeap(array, i, len);
}
}

private void maxHeap(int[] array, int root, int len) {
    int left = 2 * root;
    int right = 2 * root + 1;
    int largest = root;
    if (left <= len && array[left] > array[root]) {
    largest = left;
}
if (right <= len && array[right] > array[largest]) {
    largest = right;
}
if (largest != root) {
    swap(array, root, largest);
    maxHeap(array, largest, len);
}
}


private void swap(int[] array, int left, int right) {
    int temp = array[left];
    array[left] = array[right];
    array[right] = temp;
}
