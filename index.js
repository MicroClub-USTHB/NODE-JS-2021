/*génération clé publique et privé RSA 

Choisir p et q, deux nombres premiers entre eux (pour le nombre premiers on utilise miller_rabin et pour verifier s'il sont premier entre eux pgcd)
calculer leur produit n = pq, appelé module de chiffrement ;
calculer φ(n) = (p - 1)(q - 1) (c'est la valeur de l'indicatrice d'Euler en n) ;
choisir un entier naturel e premier avec φ(n) et strictement inférieur à φ(n), appelé exposant de chiffrement ;
calculer l'entier naturel d, inverse de e modulo φ(n), et strictement inférieur à φ(n), appelé exposant de déchiffrement ; d peut se calculer efficacement par l'algorithme d'Euclide étendu.
*/
var petitspremiers = [];
// =============================================================================
function random(a, b) {
    return Math.floor(Math.random() * (b - a)) + a;
}
function lpowmod(a, b, n) {
    let r = 1;
    while (b > 0) {
        if (b & (1 == 0)) b = b >> 1;
        else {
            r = (r * a) % n;
            b = (b - 1) >> 1;
        }
        a = (a * a) % n;
    }
    return r;
}
// =============================================================================
//  Test de primalité probabiliste de Miller-Rabin
function _millerRabin(a, n) {
    //"""Ne pas appeler directement (fonction utilitaire). Appeler millerRabin(n, k=20)"""
    // trouver s et d pour transformer n-1 en (2**s)*d
    let d = n - 1,
        s = 0;
    while (d % 2 == 0) {
        d >>= 1;
        s += 1;
    }

    // calculer l'exponentiation modulaire (a**d)%n
    let apow = lpowmod(a, d, n); // =(a**d)%n

    // si (a**d) % n ==1 => n est probablement 1er
    if (apow == 1) return true;
    for (let i = 0; i < s; i++) {
        // si a**(d*(2**r)) % n == (n-1) => n est probablement 1er
        if (lpowmod(a, d, n) == n - 1) return True;
        d *= 2;
    }

    return false;
}
// ========================
function millerRabin(n, k = 20) {
    //"""Test de primalité probabiliste de Miller-Rabin"""

    // éliminer le cas des petits nombres <=1024
    if (n <= 1024) {
        return petitspremiers.inclues(n);
    }

    // éliminer le cas des nombres pairs qui ne peuvent pas être 1ers!
    if (n & (1 == 0)) return false;

    // recommencer le test k fois: seul les nb ayant réussi k fois seront True
    for (let i = 0; i < k; i++) {
        // trouver un nombre au hasard entre 1 et n-1 (bornes inclues)
        a = random(1, n - 1);
        // si le test echoue une seule fois => n est composé
        if (!_millerRabin(a, n)) return false;
    }
    // n a réussi les k tests => il est probablement 1er
    return True;
}
//------------------generateur de nombres premiers------------------#
function genpremier(nbits) {
    while (true) {
        n = random(2, 2 ** nbits);
        if (millerRabin(n)) return n;
    }
}
//------------------PGCD de deux nombres------------------#
function find_gcd(x, y) {
    while (y) {
        let yy = y;
        y = x % y;
        x = yy;
    }
    return x;
}
//------------------calcul de l inverse modulaire ------------------#
function mod_inverse(x, m) {
    for (let n = 0; n < m; n++) {
        if ((x * n) % m == 1) {
            return n;
        }
    }
    return null;
}

//------------------generation des clé RSA publique et privé  ------------------#
function generation_de_cle(longeur) {
    //161137 161141
    //122489 122497
    //88463 88469
    //5449, 5471
    //6599, 6607
    //SSI : 5449 , 6599
    //RSD : 5471 ,6607
    let l = [],
        p = 5471,
        q = 6607,
        n = p * q,
        phi = (p - 1) * (q - 1),
        cle_publique = random(3, phi);
    while (find_gcd(cle_publique, phi) != 1) cle_publique = random(3, phi);
    cle_prive = mod_inverse(cle_publique, phi);
    return {
        cle_publique,
        cle_prive,
        n,
    };
}
console.log(generation_de_cle(1024));
