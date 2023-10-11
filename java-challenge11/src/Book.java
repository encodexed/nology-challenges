import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Book {

  String title;
  int pages;
  String author;
  int yearPublished;

  public Book(String title, int pages, String author, int yearPublished) {
    this.title = title;
    this.pages = pages;
    this.author = author;
    this.yearPublished = yearPublished;
  }

  public static List<String> getUppercaseBookNames(Book[] books) {
    Stream<String> booksStream = Stream.of(books)
        .map(book ->  book.title.toUpperCase());

    return booksStream.collect(Collectors.toList());
  }
  
  public static List<String> get3rdMilleniumBooks(Book[] books) {
    Stream<String> booksStream = Stream.of(books)
        .filter(book -> book.yearPublished > 1999)
        .map(book -> book.title);

    return booksStream.collect(Collectors.toList());
  }

  public static int getFullPageCount(Book[] books) {
    return Stream.of(books)
        .mapToInt(book -> book.pages)
        .sum();
  }

  public static Book getLargestBook(Book[] books) {
    Optional<Book> biggestBook = Stream.of(books)
        .reduce((prev, curr) -> {
          System.out.println(prev.pages);
          if (prev.pages > curr.pages) {
            return prev;
          } else {
            return curr;
          }
        });

    return biggestBook.get();
  }
  
  // Didn't do the sorting method
}

