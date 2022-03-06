add_letters(5);

document.getElementById('word-len').addEventListener('change', (event) => {
  remove_letters();
  add_letters(event.target.value);
});

document.getElementById('submit').addEventListener('click', (event) => {
    find_words()
  });

function remove_letters(){
    const boxes = document.getElementById("letter-boxes");
    while (boxes.lastElementChild){
        boxes.removeChild(boxes.lastElementChild)
    }
}

function add_letters(n){
    for(let i = 0;i<n;i++){
        const box = document.createElement("input");
        box.maxLength=1;
        const element = document.getElementById("letter-boxes");
        element.appendChild(box);
    }
}
function post_results(results){
    n = results.length;
    for(let i = 0;i<n;i++){
        const box = document.createElement("p");
        const node = document.createTextNode(results[i])
        box.appendChild(node)
        const element = document.getElementById("results");
        element.appendChild(box);
    }
}
function remove_results(){
    const boxes = document.getElementById("results");
    while (boxes.lastElementChild){
        boxes.removeChild(boxes.lastElementChild)
    }
}

function find_words(){
    const word_len = document.getElementById("word-len").value;
    const extra_letters = removeDuplicateCharacters(document.getElementById("extra-words").value);
    const num_extra_letters = extra_letters.length;
    var ancestor = document.getElementById('letter-boxes');
    var descendents = ancestor.getElementsByTagName('*');
    descendents = Array.prototype.slice.call(descendents);
    const n = words.length;
    var results = [];
    for(let i = 0;i<n;i++){
        if(words[i].length == word_len){
            if((descendents[0].value == "" || words[i][0] == descendents[0].value)
            && (word_len < 2 ||descendents[1].value == "" || words[i][1] == descendents[1].value )
            && (word_len < 3 ||descendents[2].value == "" || words[i][2] == descendents[2].value )
            && (word_len < 4 ||descendents[3].value == "" || words[i][3] == descendents[3].value )
            && (word_len < 5 ||descendents[4].value == "" || words[i][4] == descendents[4].value )
            && (word_len < 6 ||descendents[5].value == "" || words[i][5] == descendents[5].value )
            && (word_len < 7 ||descendents[6].value == "" || words[i][6] == descendents[6].value )
            && (word_len < 8 ||descendents[7].value == "" || words[i][7] == descendents[7].value )
            && (word_len < 9 ||descendents[8].value == "" || words[i][8] == descendents[8].value )
            && (word_len < 10 ||descendents[9].value == "" || words[i][9] == descendents[9].value )
            ){
                
                var extras = 1;
                
                for(let j=0;j<num_extra_letters;j++){
                    curr = extra_letters.charAt(j);
                   
                    if((/[a-zA-Z]/).test(curr)){
                        if(!words[i].includes(curr)){
                            extras = 0;
                            break;
                        } 
                    }
                }
                if(extras == 1){
                    results.push(words[i])
                }
            }
            
        }

    }
    if(results == []){
        results.push("No words match description");
    }
    remove_results();
    post_results(results);
}

function removeDuplicateCharacters(string) {
    return string
      .split('')
      .filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
      })
      .join('');
  }
