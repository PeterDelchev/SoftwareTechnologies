/*
 Write a JavaScript function to extract from array of strings all capital-case words. All non-letter chars are considered separators.

 Input:
 We start by HTML, CSS, JavaScript, JSON and REST.
 Later we touch some PHP, MySQL and SQL.
 Later we play with C#, EF, SQL Server and ASP.NET MVC.
 Finally, we touch some Java, Hibernate and Spring.MVC.

 Output:
 HTML, CSS, JSON, REST, PHP, SQL, C, EF, SQL, ASP, NET, MVC, MVC
 */

function myFunction(arr) {
    let singleWords = arr.join(",")
        .split(/\W+/)
        .filter(word => word.length > 0)
        .filter(isUpperCase)
        .join(", ");

    console.log(singleWords);

    function isUpperCase(singleWord) {
        for (let ch of singleWord) {
            if (ch != ch.toUpperCase())
                return false;
        }
        return true;
    }
}