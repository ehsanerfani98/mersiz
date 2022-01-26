<?php

namespace Shetabit\Visitor\Middlewares;

use Carbon\Carbon;
use Closure;
use Hekmatinasser\Verta\Verta;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Shetabit\Visitor\Models\Visit;

class LogVisits
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     *
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $logHasSaved = false;

        // create log for first binded model
        if (visitor()->device()!="Bot" and visitor()->device()!="BOT") {
        foreach ($request->route()->parameters() as $parameter) {
            if ($parameter instanceof Model) {
                visitor()->visit($parameter);

                $logHasSaved = true;

                break;
            }

        }
        @$url=explode('/',url()->current());
        // create log for normal visits
        if (@$url[3]!="admin"){
            $allvisits=Visit::where(['ip'=>visitor()->ip(),'browser'=>visitor()->browser()])->first();
            if ($allvisits){
                $allvisits->count=$allvisits->count+1;
                $allvisits->save();
            }else{
                if (!$logHasSaved) {
                    visitor()->visit();
                }
            }
            $count=1;
            $get_visitor=Visit::where(['browser'=>visitor()->browser(),'ip'=>visitor()->ip()])->first();
            if ($get_visitor){
                $v=verta();
                $time_now=$v->format('H:i');
                if ( $get_visitor->count_day!=0){
                    if ($time_now>'23:59' or $get_visitor->date<$v->format('d')){
                        Visit::where('method',"GET")->update(['count_day'=>0]);
                        $count=1;
                    }else{
                        $count=$count+$get_visitor->count_day;
                    }
                }

            }


            $get_visitor->count_day=$count;
            Visit::where('method',"GET")->update(['date'=>$v->format('d')]);
            $get_visitor->date_day=$v->format('d');
            $get_visitor->save();

        }
        
        }

        return $next($request);
    }
}
