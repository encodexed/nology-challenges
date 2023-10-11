public class Challenge11 {
    public static void main(String[] args) throws Exception {
        Book book1 = new Book("To Kill a Mockingbird", 384, "Harper Lee", 1960);
        Book book2 = new Book("The Great Gatsby", 180, "F. Scott Fizgerald", 1920);
        Book book3 = new Book("Jane Eyre", 624, "Charlotte Bronte", 1847);
        Book book4 = new Book("Cloud Atlas", 528, "David Mitchell", 2004);

        Book[] books = { book1, book2, book3, book4 };

        System.out.println(Book.getUppercaseBookNames(books));
        System.out.println(Book.get3rdMilleniumBooks(books));
        System.out.println(Book.getFullPageCount(books));
        System.out.println(Book.getLargestBook(books).title);
        
    }
}
