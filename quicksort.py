import random


class QuickSort:

    def __init__(self, col, input_tuple, low, high):
        self.nums = []
        for i in input_tuple:
            self.nums.append(list(i))
        self.quickSort(self.nums, low, high,col)

    def swap(self, nums, i, j):
        temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp

    def partition(self, nums, low, high, col):
        pivot = nums[high][col]
        i = low - 1
        for j in range(low, high):
            if nums[j][col] <= pivot:
                i += 1
                self.swap(nums, j, i)
        self.swap(nums, i + 1, high)
        return i + 1

    def quickSort(self, nums, low, high, col):
        if low < high:
            pi = self.partition(nums, low, high, col)
            self.quickSort(nums, low, pi - 1, col)
            self.quickSort(nums, pi + 1, high, col)
        return nums


if __name__ == "__main__":
    test_list = [(9, 'Benz', 'benz@gmail.com', 50.0, 'Engine'), (10, 'BMW', 'bmw@gmail.com', 80.0, 'Tire'),
                 (11, 'Benz', 'benz@gmail.com', 30.0, 'Transmission'), (12, 'Benz', 'benz@gmail.com', 10.0, 'Bumper'),
                 (13, 'Benz', 'benz@gmail.com', 90.0, 'Screen'), (14, 'Dodge', 'benz@gmail.com', 15.0, 'Screen')]
    # num = [random.randint(1, 10) for i in range(10)]
    haha = QuickSort(3, test_list, 0, len(test_list) - 1)
    test_list = haha.nums
    print(test_list)
    # print(num)
