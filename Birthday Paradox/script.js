const people = 23;
var birthday = [];
var count = 0;

console.log("TEST_01");
for(var i = 0; i < people; i++)
{
    birthday[i] = Math.ceil(Math.random() * 365 );
}

for(var i = 0; i < people; i++)
{
    console.log("birthday[" + i + "]: " + birthday[i]);
}

birthday.sort();

for(var i = 0; i < people - 1; i++)
{
    if(birthday[i] == birthday[i+1])
    {
        count++;
    }
}

if(count > 0)
{
    console.log("The number of duplicate birthdays are " + count);
}
else
{
    console.log("There are no duplicate birthdays");
}