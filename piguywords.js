add_letters(5);

document.getElementById('word-len').addEventListener('change', (event) => {
  remove_letters();
  add_letters(event.target.value);
});

document.getElementById('submit').addEventListener('click', (event) => {
    find_words()
    document.getElementById('letter-boxes').scrollIntoView()
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
    const box = document.createElement("h3");
    const node = document.createTextNode(String(n).concat(" Results"))
    box.appendChild(node)
    const element = document.getElementById("result-count");
    element.appendChild(box);
    for(let i = 0;i<n;i++){
        const box = document.createElement("p");
        const node = document.createTextNode(results[i])
        box.appendChild(node)
        const element = document.getElementById("results");
        element.appendChild(box);
    }
}
function remove_results(){
    const count_boxes = document.getElementById("result-count");
    while (count_boxes.lastElementChild){
        count_boxes.removeChild(count_boxes.lastElementChild)
    }

    const result_boxes = document.getElementById("results");
    while (result_boxes.lastElementChild){
        result_boxes.removeChild(result_boxes.lastElementChild)
    }
}

function find_words(){
    const word_len = document.getElementById("word-len").value;
    const extra_letters = removeDuplicateCharacters(document.getElementById("include").value).toLowerCase();
    const num_extra_letters = extra_letters.length;
    const exclude = removeDuplicateCharacters(document.getElementById("exclude").value).toLowerCase();
    const num_exclude = exclude.length
    var ancestor = document.getElementById('letter-boxes');
    var descendents = Array.prototype.slice.call(ancestor.getElementsByTagName('*')).map(element => {
        return element.value.toLowerCase();
      });
    const n = words.length;
    var results = [];
    for(let i = 0;i<n;i++){
        curr_word = words[i];
        
        if(curr_word.length == word_len){
            if((descendents[0] == "" || curr_word[0] == descendents[0])
            && (word_len < 2 ||descendents[1] == "" || curr_word[1] == descendents[1])
            && (word_len < 3 ||descendents[2] == "" || curr_word[2] == descendents[2])
            && (word_len < 4 ||descendents[3] == "" || curr_word[3] == descendents[3])
            && (word_len < 5 ||descendents[4] == "" || curr_word[4] == descendents[4])
            && (word_len < 6 ||descendents[5] == "" || curr_word[5] == descendents[5])
            && (word_len < 7 ||descendents[6] == "" || curr_word[6] == descendents[6])
            && (word_len < 8 ||descendents[7] == "" || curr_word[7] == descendents[7])
            && (word_len < 9 ||descendents[8] == "" || curr_word[8] == descendents[8])
            && (word_len < 10 ||descendents[9] == "" || curr_word[9] == descendents[9])
            ){
                
                var extras = 1;
                
                for(let j=0;j<num_extra_letters;j++){
                    curr = extra_letters.charAt(j);
                   
                    if((/[a-zA-Z]/).test(curr)){
                        if(!curr_word.includes(curr)){
                            extras = 0;
                            break;
                        } 
                    }
                }
                if (extras==1){
                    for(let k=0;k<num_exclude;k++){
                        curr = exclude.charAt(k);
                        if((/[a-zA-Z]/).test(curr)){
                            if(curr_word.includes(curr)){
                                extras = 0;
                                break;
                            } 
                        }
                    }
                }
                
                if(extras == 1){
                    results.push(curr_word)
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
