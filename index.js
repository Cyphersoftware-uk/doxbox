
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

const self_url = 'https://doxbox.cc';
const MaleNames = ["James Smith", "John Johnson", "Robert Williams", "Michael Brown", "William Jones", "David Davis", "Joseph Wilson", "Charles Thomas", "Thomas Anderson", "Henry Taylor", "Matthew Lewis", "George Nelson", "Daniel Hall", "Paul Adams", "Christopher Clark", "Anthony Mitchell", "Mark Green", "Edward Carter", "Steven Scott", "Andrew Bailey"]
const FemaleNames = ["Emily Smith", "Alice Johnson", "Sophia Williams", "Olivia Brown", "Isabella Jones", "Mia Davis", "Emma Wilson", "Ava Thomas", "Harper Anderson", "Lily Taylor", "Grace Lewis", "Ella Nelson", "Chloe Hall", "Amelia Adams", "Zoe Clark", "Scarlett Mitchell", "Charlotte Green", "Isabelle Carter", "Sophie Scott", "Aria Bailey"];
const reason = [
    "Someone ate the last slice of pizza",
    "The Wi-Fi went down for 2 minutes",
    "Their favorite TV show character made a bad decision",
    "The barista spelled their name wrong on the coffee cup",
    "They stepped on a LEGO",
    "Someone else got the closest parking spot",
    "Their phone auto-corrected 'lol' to 'LOL'",
    "They got a 'good morning' text at 12:01 PM",
    "Someone left an empty milk carton in the fridge",
    "Their sports team lost in a video game",
    "Someone used their favorite mug",
    "The grocery store ran out of their preferred brand of cereal",
    "They lost a follower on social media",
    "Their pen ran out of ink",
    "The vending machine gave them the wrong snack",
    "They had to wait 5 minutes in a queue",
    "Someone else got the last shopping cart",
    "They got a paper cut from an envelope",
    "Their horoscope was 'unfavorable'",
    "Someone finished the crossword puzzle in the newspaper"
];

const fakeAddresses = [
    {
        street: "123 Maple St",
        city: "Springfield",
        country: "USA",
        zip: "62704"
    },
    {
        street: "456 Elm St",
        city: "Shelbyville",
        country: "USA",
        zip: "35143"
    },
    {
        street: "789 Oak St",
        city: "London",
        country: "UK",
        zip: "SW1A 1AA"
    },
    {
        street: "101 Birch St",
        city: "Sydney",
        country: "Australia",
        zip: "2000"
    },
    {
        street: "202 Cedar St",
        city: "Toronto",
        country: "Canada",
        zip: "M5A 1T9"
    },
    {
        street: "303 Pine St",
        city: "Tokyo",
        country: "Japan",
        zip: "100-0001"
    },
    {
        street: "404 Aspen St",
        city: "Paris",
        country: "France",
        zip: "75001"
    },
    {
        street: "505 Willow St",
        city: "Berlin",
        country: "Germany",
        zip: "10115"
    },
    {
        street: "606 Fir St",
        city: "Mumbai",
        country: "India",
        zip: "400001"
    },
    {
        street: "707 Spruce St",
        city: "Beijing",
        country: "China",
        zip: "100000"
    }
];


app.get('/public', (req, res) => {
    const age = Math.floor(Math.random() * 100);
    const nameint = Math.floor(Math.random() * MaleNames.length);

    const addressInt = Math.floor(Math.random() * fakeAddresses.length);
    const address = `${fakeAddresses[addressInt].street},\n${fakeAddresses[addressInt].city},\n${fakeAddresses[addressInt].country},\n${fakeAddresses[addressInt].zip}`

    var name = req.url.split('?')[1];
    fs.readFile(path.join(__dirname, '/presets/uno.txt'), 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading the file.');
        }
        let result = data.replace('{DiscordName}', name)
            .replace('{MaleName}', MaleNames[nameint])
            .replace('{FemaleName}', FemaleNames[nameint])
            .replace('{Age}', age)
            .replace('{Reason}', reason[nameint])
            .replace('{GenericName}', MaleNames[Math.floor(Math.random() * MaleNames.length)])
            .replace('{Address}', address)
        res.render('codebox',
            { name: name, content: result });
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on ${self_url}:${PORT}`);
});