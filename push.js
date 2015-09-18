/**
 * $push
 *
 * Adiciona um elemento ao final do array e retorna
 * o novo comprimento do array a funcao curry
 *
 * @module $push
 * @author Cleber de Moraes Goncalves <cleber.programmer>
 * @example
 *
 *        $push([], 1);
 *
 */
this.Ninja.module('$push', ['$curry'], function ($curry) {

  /**
   * Adiciona um elemento no final de um array e retorna o novo
   * comprimento do array
   *
   * @public
   * @method push
   * @param {Array} a Array que recebera um novo indice
   * @param {Array|Boolean|Date|Funcation|Null|Number|Object|String|Undefined} b Valor que sera adicionado ao array
   * @return {Number} Novo comprimento do array
   * @example
   *
   *        $push([], 1);
   *
   */
  function push(a, b) {
    return [].push.call(a, b);
  }

  /**
   * Revelacao do modulo $push, encapsulando a visibilidade das funcoes
   * privadas
   */
  return $curry(push);

});
