<?php

namespace App\Http\Controllers;

use App\Pessoa;
use Illuminate\Http\Request;

class PessoaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pessoas = Pessoa::all();
        return response()->json($pessoas);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
         $request->validate([
          'nome' => 'required',
          'email' => 'required',
          'nascimento' => 'required',
          'telefone' => 'required'
        ]);
        $pessoa = Pessoa::create($request->all());
        return response()->json(['message'=> 'Cadastro efetuado com sucesso!', 
        'pessoa' => $pessoa]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Pessoa  $pessoa
     * @return \Illuminate\Http\Response
     */
    public function show(Pessoa $pessoa)
    {
        return $pessoa;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Pessoa  $pessoa
     * @return \Illuminate\Http\Response
     */
    public function edit(Pessoa $pessoa)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Pessoa  $pessoa
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Pessoa $pessoa)
    {
        $request->validate([
            'nome' => 'required',
            'email' => 'required',
            'nascimento' => 'required',
            'telefone' => 'required'//optional if you want this to be required
        ]);
        $pessoa->nome = $request->nome();
        $pessoa->email = $request->email();
        $pessoa->nascimento = $request->nascimento();
        $pessoa->telefone = $request->telefone();
        $pessoa->save();
        
        return response()->json([
            'message' => 'Cadastro atualizado!',
            'pessoa' => $pessoa
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Pessoa  $pessoa
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pessoa $pessoa)
    {
        $pessoa->delete();
        return response()->json([
            'message' => 'Cadastro excluído!'
        ]);
    }
}
