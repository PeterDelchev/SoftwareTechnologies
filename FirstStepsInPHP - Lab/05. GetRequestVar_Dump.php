<!--Write a PHP script to dump the content of the HTTP GET request parameters using var_dump(…)-->

<!DOCTYPE html>
<html>
<head>
    <title>Hello PHP</title>
</head>
<body>
<form>
    <div>Name: </div><input type="text" name="getName"/>
    <div>Age: </div><input type="number" name="getAge"/>
    <div>Town: </div>
    <select name="town">
        <option value="10">Sofia</option>
        <option value="20">Plovdiv</option>
        <option value="30">Varna</option>
    </select>
    <div><input type="submit" /></div>
</form>

<?php var_dump($_GET); ?>
</body>
</html>