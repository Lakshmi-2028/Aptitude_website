
document.addEventListener('DOMContentLoaded', function() {
    const topics = document.getElementById('topics');
    const questionsContainer = document.getElementById('questions-container');
    let totalScore = 0;

    const topicsData = {
        'hcf-lcm': [
            { question: 'What is the HCF of 12 and 16?',
             options: ['2', '4', '8'], 
             answer: '4',
             explanation: 'The highest common factor of 12 and 16 is 4, since it is the largest number that divides both 12 and 16 without leaving a remainder.'
             },
            { question: 'LCM of 10 and 15 is?', 
            options: ['30', '50', '150'],
             answer: '30',
             explanation:'The LCM of 10 and 15 is 30 because it is the smallest number into which both 10 and 15 can divide without leaving a remainder.'
             },
            { question: 'What is the HCF of 36 and 60?',
             options: ['6', '12', '18'],
              answer: '12',
              explanation:'The HCF of 36 and 60 is 12 because it is the largest number that divides both 36 and 60 without leaving a remainder.'
             },
             { question: 'If the LCM of two numbers is 240 and their HCF is 15, find one possible pair of these numbers.',
             options: ['30 and 120', '40 and 90', '45 and 80'],
              answer: '40 and 90',
              explanation:'The formula relating two numbers with their HCF and LCM is LCM×HCF=product of the numbers LCM×HCF=product of the numbers.240×15=3600 is the product of the two numbers.One possible pair of numbers that fits this product is 40 and 90 because 40×90=3600.' 
             },
             {  question:'What is the LCM of four different prime numbers less than 15?',
              options: ['210', '2310', '30030'],
              answer: '2310',
              explanation:'The LCM of any set of prime numbers is the product of those primes because primes have no common divisors other than 1; for any four primes under 15, like 2, 3, 5, and 7, it is 2×3×5×7=210. For larger combinations including 11 and 13, the LCM would simply be the product of all chosen primes is 2×3×5×7×11×13/2=2310=210 .'
             }
        ],
        'numbers': [
            { question: 'What is the sum of the first 100 natural numbers?',
             options: ['5050', '5005', '5500'],
              answer: '5050',
              explanation:'The sum of the first 100 natural numbers can be calculated using the formula n(n+1)/2 where n is the number of terms. Substituting n = 100, we get (100*101)/2 = 5050.'
             },
            { question: 'If the product of three consecutive integers is 336, find the integers.', 
             options: ['6, 7, 8', '5, 6, 7', '7, 8, 9'], 
             answer: '6, 7, 8',
             explanation:'Let the three consecutive integers be x, x+1, and x+2. So, the equation becomes x(x+1)(x+2) = 336. Solving this equation, we find the integers to be 6, 7, and 8.'
             },
            { question: 'What is the least number that must be added to 1056, so that the sum is completely divisible by 23?',
             options: ['2', '3', '1'],
              answer: '2',
              explantion:'To find the least number to be added to 1056 to make it divisible by 23, we find the remainder when 1056 is divided by 23, which is 12. So, the least number to be added is 23 - 12 = 11.'
             },
             { question: 'How many zeros are at the end of the number 100 factorial (100!)?',
             options: ['20', '30', '24'],
              answer: '24',
              explantion:'There are 24 zeros at the end of 100!, calculated by the number of times 5 can be factored out of the numbers 1 to 100.'
             },
             { question: 'Which of the following is a perfect square?',
             options: ['27', '49', '51'],
              answer: '49',
              explantion:'49 is a perfect square because it equals 7^2.'
             }
        ],
        'ages': [
            { question: 'The ratio of ages of two persons is 6:5. If the sum of their ages is 55, find their ages.',
             options: ['30 and 25', '24 and 20', '36 and 30'],
              answer: '30 and 25',
              explanation:'Let the ages be 6x and 5x. So, the equation becomes 6x + 5x = 55. Solving this equation, we get x = 5. Therefore, the ages are 65 = 30 and 55 = 25.'
             },
            { question: 'A person is twice as old as another person. If the sum of their ages is 36, find their ages.', 
             options: ['24 and 12', '20 and 16', '25 and 11'],
              answer: '24 and 12',
              explanation:'Let the ages be x and 2x. So, the equation becomes x + 2x = 36. Solving this equation, we get x = 12. Therefore, the ages are 12 and 24.'
             },
            { question: 'The age of a father 10 years ago was three times the age of his son. If the fathers age is 40 now, what is the son\'s current age?',
             options: ['20', '15', '10'], 
              answer: '20',
              explanation:'Let the sons age 10 years ago be x. So, the fathers age 10 years ago was 3x. Given that the fathers age now is 40, we can write the equation 3x + 10 = 40. Solving this equation, we get x = 10. Therefore, the sons current age is 10 + 10 = 20.'
             },
             { question: 'A father is four times as old as his son. Five years ago, he was nine times as old. How old is the son now?',
             options: ['12 years', '15 years', '10 years'], 
              answer: '10 years',
              explanation:' If the son is x years now, the father is 4x years. Five years ago,x-5 and 4x-5,set 4x-5 = 9(x-5),solve we get x=10 years.'
             },
             { question: ' The total age of A and B is 24 years. Four years ago, A was twice as old as B. How old is B now?',
             options: ['12 years', '14 years', '16 years'], 
              answer: '14 years',
              explanation:' Let B’s current age be x, then A’s age is 24-x. Four years ago,24-x-4=2(x-4).Solving gives B’s age as 14.'
            }
        ],
        'averages': [
            { question: 'Find the average of first 50 natural numbers.', 
            options: ['24.5', '25.5', '26.5'], 
            answer: '25.5' ,
            explanation:'The average of the first n natural numbers is (n + 1) / 2. Substituting n = 50, we get (50 + 1) / 2 = 25.5.'
        },
            { question: 'Average of 20, 10, 30 and 40 is?', 
            options: ['25', '30', '100'],
             answer: '25',
             explanation:'The average of a set of numbers is calculated by summing up all the numbers and dividing by the count of numbers. So, (20 + 10 + 30 + 40) / 4 = 25.'
             },
            { question: 'The average weight of 8 men is increased by 1.5 kg when one of the men who weighs 65 kg is replaced by a new man. What is the weight of that new man?',
             options: ['77 kg', '78 kg', '80 kg'],
              answer: '77 kg',
              explanation:'Let the weight of the new man be x. So, the equation becomes (8 * average) - 65 + x = 8 * (average + 1.5). Solving this equation, we find the weight of the new man to be 77 kg.'
             },
             { question: 'The average of five numbers is 68. If one number is excluded, the average becomes 65. What is the excluded number?', 
            options: ['80', '83', '78'],
             answer: '80',
             explanation:'The total sum for 5 numbers is 68×5=340. After excluding one number, total sum for 4 numbers is 65×4=260. The excluded number is 340−260=80.'
             },
             { question: 'The average age of a class of 20 students is 15 years. If the teachers age is also included, the average increases by one year. What is the teachers age?', 
            options: ['36 years', '35 years', '40 years'],
             answer: '36 years',
             explanation:'Total age of students is 15×20=300. With the teacher included, average becomes 16 years, so total age 16×21=336. Teachers age is 336−300=36 years.'
             }
        ],
        'clock': [
            { question: 'What is the angle between the hands of a clock at 3:15',
             options: ['6.5 degrees', '7.5 degrees', '7 degrees'],
              answer: '7.5 degrees',
              explanation:'At 3:15, the hour hand is at 97.5 degrees (3 hours times 30 degrees each plus 7.5 degrees for 15 minutes), and the minute hand is at 90 degrees (15 minutes times 6 degrees each). The difference is   ∣97.5−90∣=7.5 degrees.'
            },
            { question: 'How many times do the hands of a clock coincide in a day?',
             options: ['22', '24', '20'],
              answer: '22',
              explanation:'The hands of a clock coincides 22 times in a day. This can be derived from the fact that the minute hand gains on the hour hand at a rate of 55/11 minutes per hour and the hour hand completes 2 full rotations in 24 hours.' 
             },
            { question: 'At what time between 1 and 2 o’clock do the hands of a clock overlap?',
             options: ['5.45 minutes', '6 minutes', '5.30 minutes'],
              answer: '5.45minutes',
              explanation:'Using the formula for overlap 30(h-m)/11 where h is the hour (1 in this case), the minute hand overlaps the hour hand approximately at 5.45 minutes past 1.'
            },
            { question: 'How many times are the hands of a clock at right angles between 3 oclock and 4 oclock?',
             options: ['once', 'twice', 'thrice'],
              answer: 'twice',
              explanation:'The hands of a clock are at right angles twice every hour. In this specific time frame, careful calculation shows two occurrences..'
            } ,
            { question: 'At what time between 7 and 8 oclock are the hands of a clock exactly aligned?',
             options: ['7.05', '7.07', '7.10'],
              answer: '7.07',
              explanation:'At 7 oclock, the minute hand is at 12 and the hour hand at 7. Every minute, the minute hand moves 6 degrees and the hour hand 0.5 degrees. They are aligned when the difference between them is 0. The formula (60h-11m)/2 =θ where θ is the angle in degrees can be used to find the minute m when hands align.'
            } 
        ],
        'calendar': [
            { question: 'If January 1st is on a Friday, what day of the week will January 31st be?',
             options: ['Sunday', 'Monday', 'Friday'], 
             answer: 'Sunday',
             explanation:'January has  31 days, which is exactly 4 weeks and 3 days. So, January 31st will be 3 days after Friday, which is Sunday.'
             },
            { question: 'What day of the week was July 4, 1776?', 
            options: ['Thursday', 'Friday', 'Wednesday'],
             answer: 'Thursday',
             explanation:'Historical calculations show that July 4, 1776, was a Thursday.'
             }, // Note: Simplified; actual historical calculation needed
            { question: 'If February 1st is a Monday, what day of the week will March 1st be?', 
             options: ['Monday', 'Tuesday', 'Sunday'],
              answer: 'Monday',
              explanation:'February has 28 days, which is exactly 4 weeks. Since March 1st comes after February 28th, it will be Monday + 4 days = Friday.' 
            },
            { question: 'What day of the week was January 1, 2000?', 
            options: ['Thursday', 'Friday', 'Saturday'],
             answer: 'Saturday',
             explanation:'Using Zellers Congruence or software calculations, January 1, 2000, was a Saturday.'
             },
             { question: 'If April 1, 2024, falls on Monday, what day of the week will be May 31, 2024?', 
            options: ['Thursday', 'Friday', 'Wednesday'],
             answer: 'Friday',
             explanation:'April 1 to May 1 is 30 days (Monday + 30 days = Wednesday). May 31 is 30 days after May 1, adding 30 days to Wednesday gives Friday.'
             }
        
        ],
        'percentage': [
            { question: 'What is 20% of 150?',
             options: ['30', '20', '25'],
              answer: '30',
              explanation:'To find 20% of 150, we calculate 20%*150=30'
             },
            { question: 'Increase 200 by 25%. What is the new value?',
             options: ['250', '225', '300'], 
             answer: '250',
             explanation:'To Increase 200 by 25%, 200+25/100*200,then 200+50=250.' 
            },
            { question: 'If 60% of a number is 12, what is 100% of the number?',
             options: ['20', '18', '25'],
              answer: '20',
              explanation:' If 60% of a number is 12, then the number is 12/0.6=20.'
             },
             { question: 'If an amount of $1,500 is increased by 25%, what is the new amount?',
             options: ['$1,875', '$1,650', '$1,750'],
              answer: '$1,875',
              explanation:'25% of $1,500 is $375, so the new amount is $1,500 + $375 = $1,875.'
             },
             { question: 'An item is sold for $120 at a profit of 20%. What was the cost price?',
             options: ['$90', '$100', '$110'],
              answer: '$100',
              explanation:'Selling price = Cost price + 20% of Cost price. If Cost price is x, then 1.20x = 120,so x=$100.'
             }

        ],
        
        'probability': [
            { question: 'What is the probability of flipping a fair coin and getting heads?',
             options: ['1/2', '1/4', '1/3'], 
             answer: '1/2',
             explanation:'Since there are 2 equally likely outcomes (heads or tails) when flipping a fair coin, the probability of getting heads is 1/2'
             },
            { question: 'If a bag contains 3 red balls and 2 blue balls, what is the probability of drawing a blue ball?',
             options: ['2/5', '3/5', '1/2'], 
             answer: '2/5',
             explanation:'The total number of balls in the bag is 3 (red) + 2 (blue) = 5. The probability of drawing a blue ball is the number of favorable outcomes (2 blue balls) divided by the total number of outcomes (5 balls), which is 2/5' 
            },
            { question: 'What is the probability of drawing an ace from a standard deck of cards?',
             options: ['1/13', '1/26', '1/52'],
              answer: '1/13',
              explanation:'In a standard deck of 52 cards, there are 4 aces. So, the probability of drawing an ace is 1/13'
             },
             { question: 'If two dice are rolled, what is the probability that the sum is 7?',
             options: ['1/6', '1/12', '1/18'],
              answer: '1/6',
              explanation:'here are 6 outcomes (1+6, 2+5, 3+4, 4+3, 5+2, 6+1) that sum to 7 out of 36 possible outcomes, so the probability is 6/36 = 1/6.'
             },
             { question: 'A bag contains 2 red, 4 blue, and 3 green balls. What is the probability of drawing a green ball?',
             options: ['1/3', '1/4', '3/9'],
              answer: '1/3',
              explanation:'There are 9 balls total and 3 are green, so the probability is 3/9 or simplified to 1/3.'
             }
        ],
        'boats-and-streams': [
            { question: 'A boat goes 10 km upstream in 2 hours. How fast is the stream if the speed of the boat in still water is 8 km/h?',
             options: ['3 km/h', '1 km/h', '5 km/h'], 
             answer: '1 km/h',
             explanation:'Use the formula: Speed of boat in still water = Speed of boat in downstream + Speed of stream. So,8=10/2 +Speed of stream, which gives the speed of the stream as 1km/h.'
             },
            { question: 'The speed of a boat in still water is 15 km/h, and the speed of the stream is 3 km/h. What is the speed downstream?',
             options: ['12 km/h', '18 km/h', '20 km/h'], 
             answer: '18 km/h',
             explanation:'Speed downstream = Speed of boat in still water + Speed of stream = 15+3=18km/h.'
             },
            { question: 'A boat takes 90 minutes less to travel 36 miles downstream than to travel the same distance upstream. If the speed of the stream is 3 mph, find the speed of the boat in still water.',
             options: ['12 mph', '9 mph', '15 mph'], 
             answer: '12 mph',
             explanation:'Use the formula: Time = Distance/Speed. Let the speed of the boat in still water be x mph.then 36/(x+3)-36/(x-3)=1.5 (converted 90 min to hours) by solving we get 12mph.'
             },
             { question:  'A man rows to a place 48 km away and comes back in a total of 14 hours. If the speed of the river flow is 3 km/hr, and the speed of the boat in still water is the same in both directions, what is the speed of the boat in still water?',
             options: ['7 km/hr', '9 km/hr', '8 km/hr'], 
             answer: '8 km/hr',
             explanation:'Let the speed of the boat in still water be x,where 48/x-3 + 48/x+3 = 14.Solving this equation, the boats speed in still water is found to be 8 km/hr.'
            },
             { question: 'A boat goes 24 km upstream and 28 km downstream in 6 hours. If the speed of the stream is 2 km/hr, what is the speed of the boat in still water?',
             options: ['10 km/hr', '12 km/hr', '14 km/hr'], 
             answer: '12 km/hr',
             explanation:' Let the speed of the boat in still water be x km/hr. Then, upstream speed is x−2 km/hr and downstream speed is x+2 km/hr. From 24/(x-2) + 28/(x+2) = 6 solving for x gives the speed of the boat as 12 km/hr.'
             }
        ],
        'pipes-and-cisterns': [
            { question: 'One pipe can fill a tank three times as fast as another pipe. If together they can fill the tank in 36 minutes, how long would it take for the faster pipe to fill the tank alone?',
             options: ['48 minutes', '54 minutes', '45 minutes'],
              answer: '45 minutes',
              explanation:'Let the slower pipes time be x minutes, then the faster pipes time is x/3 minutes. Using the formula:1/(x/3)+1/x=1/36 ,by solving x we get x=45 minutes.' 
            },
            { question: 'Two pipes A and B can fill a tank in 20 and 30 minutes respectively. If both pipes are opened together, how long will it take to fill the tank?', 
            options: ['12 minutes', '15 minutes', '17 minutes'],
             answer: '12 minutes',
             explanation:'The combined rate of A and B is 1/20+1/30=1/12.So, they can fill the tank together in 12 minutes.'
            },
            { question: 'Pipe A can fill a tank in 5 hours, pipe B in 6 hours, and pipe C can empty it in 12 hours. If all three pipes are opened together, in how many hours will the tank be filled?', 
            options: ['3 hours', '4 hours', '5 hours'],
             answer: '4 hours',
             explanation:'The combined rate of filling of A, B, and emptying of C is(1/6 + 1/5 - 1/12)=(12+10-5)/60=17/60 tank per hour. So, the tank will be filled in 60/17= 3.54hours.'
             },
             { question: 'Pipe A can fill a tank in 6 hours, and Pipe B can empty it in 9 hours. If both pipes are opened together, how long will it take to fill the tank?', 
            options: ['18 hours', '24 hours', '12 hours'],
             answer: '18 hours',
             explanation:' he rate at which Pipe A fills the tank is 1/6 of the tank per hour, and Pipe B empties it at 1/9 per hour. Together, the rate is 1/6−1/9=1/18 of the tank per hour. Thus, filling the tank takes 18 hours.'
             },
             { question: ' A cistern has two taps (one inlet and one outlet). The inlet tap can fill the cistern in 8 hours, while the outlet tap can empty it in 12 hours. If both taps are opened at the same time, how long will it take to fill the tank?', 
            options: ['24 hours', '48 hours', '32 hours'],
             answer: '24 hours',
             explanation:'The filling rate is 1/8 and the emptying rate is 1/12. Net rate = 1/8−1/12=1/24. Hence, it takes 24 hours to fill.'
             }
        ],
        'area': [
            { question: 'Find the area of a circle with a radius of 7 cm.',
             options: ['154 cm^2', '147 cm^2', '150 cm^2'],
              answer: '154 cm^2',
              explanation:'The area of a circle is (22/7)*r*r ie (22/7)*7*7=154 cm^2.'
             },
            { question: 'What is the area of a rectangle with length 10 cm and width 5 cm?', 
            options: ['50 cm^2', '45 cm^2', '55 cm^2'],
             answer: '50 cm^2',
             explanation:'The area of rectangle is length*breadth ie 10*5 = 50 cm^2.'
             },
            { question: 'Calculate the area of a triangle with base 8 cm and height 9 cm.',
             options: ['36 cm^2', '72 cm^2', '18 cm^2'], 
             answer: '36 cm^2',
             explanation:'The area of triangle is 1/2(base*height) ie 1/2(8*9)=36 cm^2.'
         },
         { question: 'What is the area of a rectangle whose length is 8 cm more than its width and whose perimeter is 56 cm?', 
            options: ['150 cm^2', '180 cm^2', '175 cm^2'],
             answer: '180 cm^2',
             explanation:'Let the width be w cm. Then, length = w+8 cm. Perimeter 2(w+w+8)=56 cm simplifies to 4w+16=56, giving w=10 cm. Thus, area =w×(w+8)=10×18=180 cm².'
             },
             { question: 'Find the area of a circle with a radius of 7 cm.', 
            options: ['154cm^2', '144 cm^2', '16 4cm^2'],
             answer: '154 cm^2',
             explanation:' Area = π×radius^2=3.14*7^2=153.86cm^2 so rounded to 154cm^2.' 
             },

        ],
        'profit-and-loss': [
            { question: 'A shopkeeper sells a product at a 20% profit. If the product costs Rs.100, what is the selling price?',
             options: ['Rs.120', 'Rs.100', 'Rs.80'], 
             answer: 'Rs.120',
             explanation:'The selling price is 100+(100*20/100)=rs.120.'
             },
            { question: 'If a laptop is sold at Rs.54000 with a loss of 10%, what was its cost price?',
             options: ['Rs.60000', 'Rs.50000', 'Rs.55000'],
              answer: 'Rs.60000',
              explanation:'Let the cost price be x.then x-(x*10/100)=54000.Solving this equation, we get x=rs 60000.'
             },
            { question: 'What is the selling price of a chair that was bought for Rs.800 and sold at a profit of 25%?',
             options: ['Rs.1000', 'Rs.950', 'Rs.1050'],
              answer: 'Rs.1000',
              explanation:'The profit of 25% on Rs.800 equals Rs.200. Therefore, the selling price is Rs.800 (cost price) + Rs.200 (profit) = Rs.1000.'
             },
             { question: ' A merchant purchases a wristwatch for $400 and sells it for $520. What is the percentage profit?',
             options: ['25%', '20%', '30%'],
              answer: '30%',
              explanation:' Profit = $520 - $400 = $120. Profit percentage = (120/400)×100=30.'
             },
             { question: 'A shopkeeper sells an item at a 20% discount, yet still makes a 25% profit. If he sells it for $120, what was the cost price?',
             options: ['$89', '$96', '$100'],
              answer: '$96',
              explanation:'  Let the cost price be x. Selling price at 25% profit would be 1.25x. With a 20% discount, the final selling price becomes 1.25x×0.8=120. Solving for x gives the cost price as $96.'
             },
        ],
        'alligation-and-mixtures': [
            { question: 'In what ratio must tea worth Rs.60 per kg be mixed with tea worth Rs.65 per kg so that by selling the mixture at Rs.68.20 per kg, there is a gain of 10%?', 
            options: ['3:2', '4:3', '5:3'],
             answer: '3:2',
             explanation:'To gain 10%, the selling price must cover a cost price that is 10% less than Rs.68.20, which calculates back to Rs.62/kg. Using the alligation rule, the ratio of the mix for the teas to average out at Rs.62/kg from Rs.60 and Rs.65 can be calculated as 3:2.' 
            },
            { question: 'A container contains 40 litres of milk. From this container, 4 litres of milk was taken out and replaced by water. This process was repeated further two times. How much milk is now contained by the container?',
             options: ['29.16 litres', '30 litres', '32.98 litres'],
              answer: '29.16 litres',
              explanation:'Each time milk is removed and replaced with water, only 90% (36/40) of the previous amount of milk remains. After three repetitions, the amount of milk left = 40 * (36/40)³ = 29.16 litres.'
             },
            { question: 'A solution of 70% alcohol is mixed with a solution of 50% alcohol resulting in 20 liters of a 60% alcohol solution. How much of the 70% solution was used?',
             options: ['12 liters', '8 liters', '10 liters'],
              answer: '12 liters',
              explanation:'Each time milk is removed and replaced with water, only 90% (36/40) of the previous amount of milk remains. After three repetitions, the amount of milk left = 40 * (36/40)³ = 29.16 litres.' 
            },
            {
                question:'How many liters of water must be added to 6 liters of a 40% acid solution to reduce it to a 30% acid solution?',
                options:['2 litres','3 litres','4 litres'],
                answer:'2 litres',
                explanation:'Let x be the liters of water added. The amount of acid doesnt change, so 6×0.4=(6+x)×0.3. Solving 2.4=1.8+0.3x gives x=2 liters.'
            },
            {
                question:'A solution of 70 liters contains 40% alcohol and the rest water. How much more alcohol should be added to make it a 50% alcohol solution?',
                options:['10 litres','15 litres','20 litres'],
                answer:'10 litres',
                explanation:'Current amount of alcohol = 40% of 70 = 28 liters. To make 50% of the solution alcohol, total solution should have 50% of 70+x liters as alcohol, leading to the equation 28+x=0.5(70+x). Solving this gives x=10 liters.'
            }
        ]  
    };
topics.querySelectorAll('li').forEach(topic => {
    topic.addEventListener('click', function() {
        const topicKey = topic.getAttribute('data-topic');
        if (topicsData[topicKey]) {
            displayQuestions(topicsData[topicKey]);
            questionsContainer.classList.remove('hidden');
        }
    });
});

function displayQuestions(questions) {
    questionsContainer.innerHTML = '<h2>Questions</h2>';
    let score = 0; // Score for the current topic
    let answeredCount = 0; // Number of answered questions in the current topic

    questions.forEach(question => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `<h3>${question.question}</h3>`;
        const optionsList = document.createElement('ul');

        question.options.forEach(option => {
            const optionItem = document.createElement('li');
            const optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = question.question;
            optionInput.value = option;
            optionItem.appendChild(optionInput);
            optionItem.append(option);
            optionsList.appendChild(optionItem);
        });

        const answerButton = document.createElement('button');
        answerButton.textContent = 'Show Answer';
        const answerDisplay = document.createElement('div');
        answerDisplay.classList.add('hidden');

        answerButton.addEventListener('click', function() {
            if (this.disabled) return;
            this.disabled = true;
            answeredCount++;
            const selectedOption = document.querySelector(`input[name="${question.question}"]:checked`);
            if (selectedOption) {
                if (selectedOption.value === question.answer) {
                    score++;
                    totalScore++;
                    answerDisplay.innerHTML = `Correct! Your score for this question: ${score}`;
                } else {
                    answerDisplay.innerHTML = `Wrong!<br> Correct answer: ${question.answer}.<br> Explanation: ${question.explanation}`;
                }
                answerDisplay.classList.remove('hidden');
                if (answeredCount === questions.length) {
                    questionsContainer.appendChild(document.createElement('hr'));
                    questionsContainer.appendChild(document.createTextNode(`End of topic. Total Score for this topic: ${score}`));
                }
            } else {
                answerDisplay.textContent = 'Please select an option.';
                answerDisplay.classList.remove('hidden');
            }
        });

        questionElement.appendChild(optionsList);
        questionElement.appendChild(answerButton);
        questionElement.appendChild(answerDisplay);
        questionsContainer.appendChild(questionElement);
    });
}
});         