Turning Exercises Notebook into an auto-graded work of art
###########################################################

And now  let’s create an assignment with a few simple problems along with automatic tests.
    
First, we should include some functions from the nose library for writing tests:

.. code-block:: python
    :linenos:

    from nose.tools import assert_equal, assert_raises

.. image:: ./images/turning_exersise_notebook.png
    :width: 600px
    :align: center
    :alt: turning exersise notebook

**Problem A:** Write a function factorial () that returns the factorial of a number. If the input number is 0, return 0. If the input number is a list or not an integer, raise a TypeError
    
We write our solution in a cell marked as **Autograded answer**:

.. code-block:: python
    :linenos:

    def factorial(n):
        ### BEGIN SOLUTION
        if type(n) == list:
            raise TypeError('Input cannot be a list!')
        elif type(n) == float:
            raise TypeError('Input cannot be a float!')
        if n == 0:
            return 0
        if n==1:
            return 1
        else:
            return n*factorial(n-1)
            ### END SOLUTION

    
and tests in a cell marked as Autograded tests and assign 10 points to it:

.. code-block:: python
    :linenos:

    assert_equal(factorial(1), 1)
    assert_equal(factorial(4), 24)
    assert_raises(TypeError, factorial, [1, 2, 3])

In addition to the tests already written, we also add some hidden tests in the last cell and assign an additional 5 points to it:

.. code-block:: python
    :linenos:

    ### BEGIN HIDDEN TESTS
    assert_equal(factorial(0), 0)
    assert_raises(TypeError, factorial, 1.5)
    ### END HIDDEN TESTS



