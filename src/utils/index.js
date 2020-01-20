export const fetchData = (e, callback) => {
    let {
        searchQuery,
        category,
        colors,
        language,
        orientation,
        editorChoice,
        safeSearch,
        order,
        page  
    } = e;
    let parsedQuery = searchQuery.trim().split(/\s+/).join('+')
    let parsedColors = colors.join(',')
    editorChoice = editorChoice ? 'true': 'false';
    safeSearch = safeSearch ? 'true': 'false';
    // console.log(editorChoice)

    fetch(`https://pixabay.com/api/?key=14924987-f77db2d5a71fbf9dc6677348b&q=${parsedQuery}&image_type=photo&pretty=true&category=${category}&colors=${parsedColors}&language=${language}&orientation=${orientation}&editors_choice=${editorChoice}&safesearch=${safeSearch}&order=${order}&per_page=30&page=${page}`)
    .then(res => res.json())
    .then(data => callback(data.hits))

    
}

