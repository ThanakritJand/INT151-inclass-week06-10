const quotes = [];
let nextId = 1;

// เพิ่ม quote ใหม่
function addQuote(content, author) {
    const quote = {
        id: nextId++,
        content,
        author
    };
    quotes.push(quote);
    return quote;
}

// ลบ quote ตาม id
function deleteQuote(id) {
    const index = quotes.findIndex(q => q.id === id);
    if (index !== -1) {
        quotes.splice(index, 1);
        return true;
    }
    return false;
}

// แก้ไข quote ตาม id
function updateQuote(id, content, author) {
    const quote = quotes.find(q => q.id === id);
    if (quote) {
        quote.content = content;
        quote.author = author;
        return true;
    }
    return false;
}

// คืนค่าทุก quote
function getAllQuotes() {
    return quotes;
}
