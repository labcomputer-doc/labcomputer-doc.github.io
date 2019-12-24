Customize Student Versіon wіth Specіal Syntax
##############################################

Nbgrader needs special syntax located within the assignment cells to create the student version of the Notebook. Selecting **Autograded Answer cells** indicates nbgrader about cells  that contain the answers which will be auto-graded.
    
Here is an example of an auto-graded answer cell:
    
.. code-block:: python
    :linenos:

    def squares(n):
        """Compute the squares of numbers from 1 to n, such that the
        ith element of the returned list equals i^2.

        """
        ### BEGIN SOLUTION
        if n < 1:
            raise ValueError("n must be greater than or equal to 1")
        return [i ** 2 for i in range(1, n + 1)]
        ### END SOLUTION

Before releasing the assignment, you must hide answers from students. For hiding the solutions, a special syntax  can be specified such as **### BEGIN SOLUTION** and **### END SOLUTION**. 
    
By default, nbgrader generate_assignment will replace code between the commented BEGIN SOLUTION and END SOLUTION region with a code stub:

.. code-block:: python
    :linenos:

    # YOUR CODE HERE
    raise NotImplementedError

Make sure you use the correct code comments for the programming language in use by your Jupyter Notebook kernel. For example:
    
**###** for Python 

.. code-block:: python
    :linenos:

    def foo(bar):
        """Prints `bar`."""
        ### BEGIN SOLUTION
        print(bar)
        ### END SOLUTION

and **//** for Javascript

.. code-block:: Javascript
    :linenos:

    function foo (bar) {
        // BEGIN SOLUTION
        console.log(bar);
        // END SOLUTION
    }

If you don't add comments for the solution region, then the nbgrader will replace all cell contents with **YOUR ANSWER HERE**.
You may hide some or all tests placed within the Autograder tests cells. For this case, the syntax **BEGIN HIDDEN TESTS** and **END HIDDEN TESTS** can be used
Partially hidden tests are useful for when the instructor would like to provide the student with some tests to validate their answer but hide other tests that may offer a clue to how to structure the solution.

