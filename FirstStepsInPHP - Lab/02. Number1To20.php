<!--Write a PHP script to print the numbers from 1 to 20-->
<!--Print the numbers in a list <ul><li>…</li></ul>-->
<!--Print odd lines in blue, even lines in red-->

<ul>
    <?php
    for ($i = 1; $i <= 20; $i++) {
        if ($i % 2 == 0) {
            echo '<li><span style="color: green">' . $i . '</span></li>';
        } else {
            echo '<li><span style="color: blue">' . $i . '</span></li>';
        }
    }
    ?>
</ul>