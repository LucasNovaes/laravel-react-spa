<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pessoa extends Model
{
    protected $fillable = ['nome', 'email', 'nascimento', 'telefone'];
    
    public function pessoas() 
    {
        return $this->hasMany(Pessoa::class);
    }
}
