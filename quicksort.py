import random


def swap(nums, i, j):
    temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp


def partition(nums, low, high):
    pivot = nums[high]
    i = low - 1
    for j in range(low, high):
        if nums[j] <= pivot:
            i += 1
            swap(nums, j, i)
    swap(nums, i + 1, high)
    return i + 1


def quickSort(nums, low, high):
    if low < high:
        pi = partition(nums, low, high)
        quickSort(nums, low, pi - 1)
        quickSort(nums, pi + 1, high)


if __name__ == "__main__":
    num = [random.randint(1, 10) for i in range(10)]
    print(num)
    quickSort(num, 0, len(num) - 1)
    print(num)
