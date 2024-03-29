<?php

namespace App\Http\Controllers;

use App\Page;
use Auth;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function indexPage()
    {
        return redirect()->route('get.login');
    }

    public function loginPage()
    {
        $pageConfigs = [
            'bodyClass' => "bg-full-screen-image",
            'blankPage' => true
        ];
        if (Auth::user()) {
            // if (Auth::user()->hasRole('Admin')) {
            //     return redirect()->route('admin.dashboard');
            // }
            if (Auth::user()->hasRole('Store Owner')) {
                return redirect()->route('restaurant.orders');
            }
        }
        return view('auth.login', [
            'pageConfigs' => $pageConfigs
        ]);
    }

    public function getPages()
    {
        $pages = Page::all();
        return response()->json($pages);
    }

    /**
     * @param Request $request
     */
    public function getSinglePage(Request $request)
    {
        $page = Page::where('slug', $request->slug)->first();

        if ($page) {
            // sleep(5);
            return response()->json($page);
        } else {
            $page = null;
            return response()->json($page);
        }

    }
}
