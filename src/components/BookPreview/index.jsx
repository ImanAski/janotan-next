import Book from "@/components/Book";

const books = [
    {
        title: "تاریخ فلسفه کاپلستون",
        author: "فردریک چارلز کاپلستون",
        frontImage: "/images/books/descartes/front.jpg",
        backImage: "/images/books/descartes/dback.jpg",
        sideImage: "/images/books/descartes/side.jpg",
        bookTexture: "/images/books/book-texture.png",
    }
]

export default function Index() {
    return (
        <div>
            {
                books.map((book, index) => {
                    return (
                        <div
                            key={index}>
                            <Book
                                previewMode={"staticSidePreview"}
                                bookCover={book.frontImage}
                                bookSide={book.sideImage}
                                bookBack={book.backImage}
                                bookTexture={book.bookTexture}
                            />
                        </div>
                    );
                })
            }
        </div>
    )
}