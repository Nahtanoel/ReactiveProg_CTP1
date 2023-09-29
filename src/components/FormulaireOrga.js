function FormulaireOrga() {

    const HandleSubmit = (e) =>{
        e.preventDefault();
        alert("Vous avez bien envoyé votre demande nous vous réponderons dans les plus brefs délai")
    }

    return (
        <>


            <form onSubmit={HandleSubmit}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Votre Email :</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Entrez votre email" />
                    <small id="emailHelp" class="form-text text-muted">On ne partage pas vos mail avec quelqu'un d'autre.</small>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Votre message :</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-success">Envoyer</button>
            </form>

        </>
    )
}

export default FormulaireOrga;