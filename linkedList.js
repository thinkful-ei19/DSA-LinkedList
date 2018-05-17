
class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        } else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null)
        }
    }

    find(item) {
        let currNode = this.head;
        if (!this.head) {
            return null;
        }
        while (currNode.value !== item) {
            if (currNode.next === null) {
                return null;
            }
            else {
                currNode = currNode.next;
            }
        }
        return currNode;
    }

    remove(item) {
        if (!this.head) {
            return null;
        }
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        let currNode = this.head;
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }

    insertBefore(newItem, before) {

        if (!this.head) {
            return null;
        }

        if (this.head.value === before) {
            this.insertFirst(newItem)
            return
        }   else {
            let currNode = this.head;       //A
            let previousNode = this.head;   //B
            //Iterate through the LL
            while ((currNode !== null) && (currNode.value !== before)) {
                previousNode = currNode;
                currNode = currNode.next;
            } //If B is === to beforeItem

            if (currNode.value === before) { //<=== this is not necessary
                //Make a new node, with the new node's next referencing currNode, and the previous Node's next referencing the new node.
                previousNode.next = new _Node(newItem, currNode)

                
            } else if (currNode === null) {
                console.log('Item for new item to be inserted before not found.')
                return;
            }
        }
    }

    insertAfter(newItem, after) {
        //This method is behaving incredibly weird, if I don't declare this insert variable is claims newItem is undefined.
        let insert = newItem
        if (!this.head) {
            return null;
        }
        if (this.head.value === after) {
            let previousNode = this.head;
            let nextNode = previousNode.next
            previousNode.next = new _Node(insert, nextNode)
        } else {
            let currNode = this.head;
            let previousNode = this.head;
            while ((currNode !== null) && (currNode.value !== after)) {
                previousNode = currNode;
                currNode = currNode.next;
            } //If B is === to afterItem
            if (currNode.value === after) {
                //Shift it up once more, the current node becomes the previous node, and the next node becomes current node so that we can pass it as the next node for new Node.
                previousNode = currNode;
                currNode = currNode.next;
                previousNode.next = new _Node(insert, currNode)
            } else if (currNode === null) {
                console.log('Item for new item to be inserted after not found.')
                return;
            }
        }
    }

    insertAt(newItem, number) {
        let count = 0;
        let insert = newItem
        if (!this.head) {
            return null;
        }
        if (number === 0) {
            this.insertFirst(newItem)
            return
        } else {
            let currNode = this.head;
            let previousNode = this.head;
            while ((currNode !== null) && (count <= number)) {
                count = count + 1
                previousNode = currNode; //count -1
                currNode = currNode.next; //count -0
                if (count === number) {
                    previousNode.next = new _Node(insert, currNode)
                } else if (currNode === null) {
                    console.log('Count has exceeded the amount of items, unable to insert.')
                    return;
                }
            }
        }
    }
}
let SLL = new LinkedList();

function main (LL) {

    LL.insertFirst('A')
    LL.insertLast('B')
    LL.insertLast('C')
    LL.insertLast('D')
    LL.insertLast('E')
    LL.insertLast('F')

    // console.log(LL.find('Helo'))
    
    // LL.insertLast('G')

    LL.insertLast('I')
    LL.insertLast('J')
    LL.insertLast('K')
    LL.insertLast('L')
    LL.insertLast('M')
    LL.insertLast('N')

    // // LL.remove('squirrel')

    // // LL.insertBefore('newItem', 'Helo')

    // // console.log(LL.find('newItem'))
    // // console.log(LL.find('Boomer'))

    // LL.insertBefore('newHead', 'Helo')

    // // LL.insertAfter('AfterHead', 'Apollo')
    // // console.log(LL.find('Apollo'))

    // // LL.insertAfter('newItem', 'Boomer')
    // // console.log(LL.find('newItem'))

    // // LL.insertAt('newItem', 2)
    // // console.log(LL.find('newItem'))

    // LL.insertBefore('Athena', 'Boomer')
    // LL.insertAfter('Hotdog', 'Helo')
    // LL.insertAt('Kat', 3)
    // LL.remove('G')

}

main(SLL)

function display(LL) {

    let currNode = LL.head;
    console.log(currNode)
    while (currNode.next !== null) {
        console.log(currNode)
        currNode = currNode.next
    }
}

// display(SLL);

function size(LL) {

    let currNode = LL.head;
    let count = 0
    while (currNode.next !== null) {
        count++
        currNode = currNode.next
    }
    count++
    return count
}

// size(SLL)

function isEmpty(LL) {
    //Assuming that it has a head (which it must)
    if (!LL.head.value) {
        console.log('Empty')
    } else {
        console.log('This linked list is not empty')
    }
}

// isEmpty(SLL);

function findPrevious(LL, item) {

    let currNode = LL.head;
    while (currNode.next !== null) {
        if (currNode.next.value === item) {
            return currNode
        }
        currNode = currNode.next
    }
}

// findPrevious(SLL, 'Helo');

function findLast(LL) {

    let currNode = LL.head;
    while (currNode.next !== null) {
        currNode = currNode.next
    }
    return currNode
}

// findLast(SLL)

/*
Mystery program
Analyze the following function (without running it in an IDE) to determine what problem it is trying to solve. What is the runtime of this algorithm?
*/

function WhatDoesThisProgramDo(lst){
    let current = lst.head;
    while(current !== null){
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else{
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}

/*
This function will go through each node starting from the head and check to see if there are duplicate values.
It will then get rid of these values by replacing the value with the value of the next node
*/

// WhatDoesThisProgramDo(SLL)
// display(SLL)
// size(SLL)


// console.log(findPrevious(SLL, 'Helo'))

function makeDoubly(LL) {
    let currNode = LL.head;
    while (currNode.next !== null) {
        currNode.previous = findPrevious(LL, currNode.value)
        currNode = currNode.next
    }
    currNode.previous = findPrevious(LL, currNode.value)
    return LL
}

function reverseLL(LL) {
    makeDoubly(LL)

    //Use a doublyLL
    //Now that we have the node's previous nodes attached
    //Remap the entire LL starting with the last item, set the next value to previous, then the next for that
    let currNode = LL.head;
    let prevHead = LL.head;
    let count = size(LL)-1
    while (count > 0) {
        if (count === size(LL)-1) {
            let next = (currNode.next);
            currNode.next = null
            currNode.previous = next;
            currNode = next
        } else {
            let next = (currNode.next);
            currNode.next = currNode.previous
            currNode.previous = next;
            currNode = next
        }
        count --
    }
    LL.head = currNode
    LL.head.next = LL.head.previous
    LL.head.previous == null
}
reverseLL(SLL)
// display(SLL)
//This reverseLL function can very likely be improved. Needs to be looked at again later, after my brain recovers from being fried.

//Doing nth instead of 3rd, can manually input 3
function nthFromEnd(LL, nth) {
    let count = size(LL) - nth
    let currNode = LL.head;
    while (count > 0) {
        count --
        currNode = currNode.next
    }
    return currNode
}

nthFromEnd(SLL, 4)

function middleOfList(LL) {
    //I'm struggling to understand why using size() wouldn't work. Yes it wouldn't work blatantly when just divided in half, but with a more accurate formula...
    //If the number is even, there is no exact single middle list item- it'd be two items.
    //If the number is odd, you could get the middle item with (((size -1) /2) + 1), couldn't you?
    //For example: size: 9 => ((9-1)/2)+1 = 5

    //is odd, there is a single item in the middle
    if (size(LL) % 2 === 1) {
        let count = ((size(LL) - 1 ) / 2 ) + 1;
        console.log(nthFromEnd(LL, count).value)
    }
    //is even, two items are in the middle
    else {
        let first = (size(LL)/2)
        let second = ((size(LL)/2) + 1)
        console.log(nthFromEnd(LL, first).value, nthFromEnd(LL, second).value)
    }
}

middleOfList(SLL)

let CLL = new LinkedList();

function mainCycle(LL) {
    LL.insertFirst('A')
    LL.insertLast('B')
    LL.insertLast('C')
    LL.insertLast('D')
    LL.insertLast('E')

    let last = findLast(LL);
    last.next = LL.head
}

mainCycle(CLL)

function isCycle(LL) {
    let tempLL = LL
    let currNode = tempLL.head;
    let count = 0
    while (currNode.next !== null) {
        if (!currNode.index) {
            currNode.index = count;
            count++
            currNode = currNode.next;
        } else {
            break
        }
    }
    if (currNode.next) {
        return true
    } else {
        return false
    }

}

// console.log(isCycle(CLL))

// For doubly linked list, see previous function. I created it earlier to use with Reversing a list... same goes for reversing a DLL

