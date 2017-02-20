function generate(){
  $(".tweet").empty();
  $(".share").empty();
  var material = $("#material").val();
  //まさかのべた書き
  var ikehaya = [];
  ikehaya.push("Any negative polls are fake news, just like the CNN, ABC, NBC polls in the election. Sorry, people want border security and extreme vetting.");
  ikehaya.push("Watched protests yesterday but was under the impression that we just had an election! Why didn’t these people vote? Celebs hurt cause badly.");
  ikehaya.push("We are going to have an unbelievable, perhaps record-setting turnout for the inauguration, and there will be plenty of movie and entertainment stars. All the dress shops are sold out in Washington. It’s hard to find a great dress for this inauguration.");
  ikehaya.push("Happy New Year to all, including to my many enemies and those who have fought me and lost so badly they just don’t know what to do. Love!");
  ikehaya.push("An ‘extremely credible source’ has called my office and told me that Barack Obama’s birth certificate is a fraud.");
  ikehaya.push("Robert Pattinson should not take back Kristen Stewart. She cheated on him like a dog & will do it again – just watch. He can do much better!");
  ikehaya.push("Ariana Huffington is unattractive, both inside and out. I fully understand why her former husband left her for a man – he made a good decision.");
  ikehaya.push("Meryl Streep, one of the most over-rated actresses in Hollywood, doesn’t know me but attacked last night at the Golden Globes. She is a Hillary flunky who lost big. For the 100th time, I never “mocked” a disabled reporter (would never do that) but simply showed him “groveling” when he totally changed a 16 year old story that he had written in order to make me look bad. Just more very dishonest media!");
  ikehaya.push("I will build a great wall – and nobody builds walls better than me, believe me – and I’ll build them very inexpensively. I will build a great, great wall on our southern border, and I will make Mexico pay for that wall. Mark my words.");
  ikehaya.push("When Mexico sends its people, they’re not sending the best. They’re not sending you, they’re sending people that have lots of problems and they’re bringing those problems with us. They’re bringing drugs. They’re bring crime. They’re rapists… And some, I assume, are good people.");
  ikehaya.push("Our great African-American President hasn’t exactly had a positive impact on the thugs who are so happily and openly destroying Baltimore.");
  ikehaya.push("If I were running ‘The View’, I’d fire Rosie O’Donnell. I mean, I’d look at her right in that fat, ugly face of hers, I’d say ‘Rosie, you’re fired.");
  ikehaya.push("All of the women on The Apprentice flirted with me – consciously or unconsciously. That’s to be expected.");
  ikehaya.push("One of they key problems today is that politics is such a disgrace. Good people don’t go into government.");
  ikehaya.push("The beauty of me is that I’m very rich.");
  ikehaya.push("It’s freezing and snowing in New York – we need global warming!");
  ikehaya.push("I’ve said if Ivanka weren’t my daughter, perhaps I’d be dating her.");
  ikehaya.push("My fingers are long and beautiful, as, it has been well documented, are various other parts of my body.");
  ikehaya.push("I have never seen a thin person drinking Diet Coke.");
  ikehaya.push("I think the only difference between me and the other candidates is that I’m more honest and my women are more beautiful.");
  var links = [];
  links.push("http://www.marieclaire.co.uk/entertainment/people/donald-trump-quotes-57213");
  links.push("http://www.marieclaire.co.uk/entertainment/people/donald-trump-quotes-57213");
  links.push("http://www.marieclaire.co.uk/entertainment/people/donald-trump-quotes-57213");
  links.push("http://www.marieclaire.co.uk/entertainment/people/donald-trump-quotes-57213");
  links.push("http://www.marieclaire.co.uk/entertainment/people/donald-trump-quotes-57213");
  links.push("http://www.marieclaire.co.uk/entertainment/people/donald-trump-quotes-57213");
  links.push("http://www.marieclaire.co.uk/entertainment/people/donald-trump-quotes-57213");
  links.push("http://www.marieclaire.co.uk/entertainment/people/donald-trump-quotes-57213");
  links.push("http://www.marieclaire.co.uk/entertainment/people/donald-trump-quotes-57213");
  links.push("http://www.marieclaire.co.uk/entertainment/people/donald-trump-quotes-57213");
  links.push("http://www.marieclaire.co.uk/entertainment/people/donald-trump-quotes-57213");
  links.push("http://www.marieclaire.co.uk/entertainment/people/donald-trump-quotes-57213");
  links.push("http://www.marieclaire.co.uk/entertainment/people/donald-trump-quotes-57213");
  links.push("http://www.marieclaire.co.uk/entertainment/people/donald-trump-quotes-57213");
  links.push("http://www.marieclaire.co.uk/entertainment/people/donald-trump-quotes-57213");
  links.push("http://www.marieclaire.co.uk/entertainment/people/donald-trump-quotes-57213");
  links.push("http://www.marieclaire.co.uk/entertainment/people/donald-trump-quotes-57213");
  links.push("http://www.marieclaire.co.uk/entertainment/people/donald-trump-quotes-57213");
  links.push("http://www.marieclaire.co.uk/entertainment/people/donald-trump-quotes-57213");
  links.push("http://www.marieclaire.co.uk/entertainment/people/donald-trump-quotes-57213");
  
  var arrayLength = ikehaya.length;
  var rand = Math.floor( Math.random() * arrayLength) ;
  var tweet = material + "\n" + ikehaya[rand];
  var source = '(Source)<br /><a target="_blank" href="' + links[rand] + '">' + links[rand] + '</a>';
  $(".tweet").append(tweet);
  $(".source").append(source);
  document.title = tweet + " / Trump Generator";
  var tw = '<a href="https://twitter.com/share" class="twitter-share-button" data-related="ihayato">Tweet</a>';
  tw += '<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?';
  tw += "'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>"
  $(".share").append(tw);
  $("#material").remove();
  $(".buttons").empty();
  var reloadButton = '<input type="button" onClick="location.reload()" class="btn btn-primary" value="Try Again">'
  $(".buttons").append(reloadButton);
  $(".tweet").css("visibility", "visible");
}
