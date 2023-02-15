function removeAll(source, pattern){
    if(pattern.length === 0){
    return source;
    }
	if(source.includes(pattern[0])){
    source = source.replace(pattern[0], '')
  }
return removeAll(source, pattern.slice(1))
}

console.log(removeAll("ImPossible", "Im"))

//***