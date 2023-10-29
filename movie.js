class Movie{
    constructor(title,stdio,rating=PG){
        this.title = title;
        this.stdio = stdio;
        this.rating = rating;
    }

}
function getPG(moviearray){
      return moviearray.filter(movie => movie.rating === 'PG');
    }

    const movies = [
        new Movie('Movie1','Lyca production','PG'),
        new Movie('Movie2','AVM','PG'),
        new Movie('Movie3','SK Production','R'),
        new Movie('Movie4','Red Jiant','PG-13'),
        new Movie('Movie5','AVM','PG'),
        ];

        const pgmovies = getPG(movies);
        console.log(pgmovies);


//d Question

class movie{
    constructor(title,stdio,rating){
        this.title=title;
        this.stdio=stdio;
        this.rating=rating;
    }
}

const CasinoRoyale = new movie('Casino Royale','Eon Productions','PG13');
console.log(CasinoRoyale);
