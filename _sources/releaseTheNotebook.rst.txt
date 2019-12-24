Release the Notebook as an Assignment
######################################

When the tasks associated with creating assignment source file(s) is complete, you can release the assignment to the students.  
    
Firstly, click on the **Generate** button located within the Nbgrader tab:
    
.. image:: ./images/generate.png
    :width: 600px
    :align: center
    :alt: generate

This **Generate** action is the step used by the nbgrader to:

* Strip regions that should be hidden from students
* Replace hidden regions with code stubs or text
* Copy source file from the source folder to the release folder

The generate step used to release the assignment to students opens a modal which displays the nbgrader's logs. If there is an error when generating the assignment, the modal will display the exception

.. image:: ./images/success.png
    :width: 600px
    :align: center
    :alt: success

Once the assignment has been successfully generated, you may click on the icon located within the Preview column that allows you to view the assignment as if you were the student user.

.. image:: ./images/preview.png
    :width: 600px
    :align: center
    :alt: preview

Here is what the student version looks like:

.. image:: ./images/students_version.png
    :width: 600px
    :align: center
    :alt: students version

Note that the solution code has been removed in both functions and the hidden tests (that were in the last cell) have been removed. This last cell which contained the hidden tests will be a read-only cell that students will not be able to modify.
    
And now, the assignment is ready for a release. In order to release this assignment to students so that they can fetch it, go back to the nbgrader and select the assignment and click on “Release”. After you will see a pop-up window with nbgrader's logs:

.. image:: ./images/success_1.png
    :width: 600px
    :align: center
    :alt: success