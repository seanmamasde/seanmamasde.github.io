import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

import 'package:site/constants.dart';
import 'package:site/menu.dart';
import 'package:site/Components/drawer.dart';
import './Pages/about.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Sean Ma',
      theme: colorTheme,
      home: const Home(title: 'Home'),
    );
  }
}

class Home extends StatelessWidget {
  const Home({Key? key, required this.title}) : super(key: key);
  final String title;

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    final height = size.height, width = size.width;

    return Scaffold(
      body: SafeArea(
        child: GestureDetector(
          onTap: () {
            if (!showMenuButton) FocusManager.instance.primaryFocus?.unfocus();
          },
          child: Stack(
            children: <Widget>[
              const Menu(),
              // owl pfp
              Container(
                alignment: Alignment.topRight,
                padding: const EdgeInsets.only(top: 60, right: 40),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.start,
                  crossAxisAlignment: CrossAxisAlignment.end,
                  children: <Widget>[
                    Container(
                      constraints: BoxConstraints(
                          maxWidth:
                              height > width ? (width / 4) : (height / 4)),
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(
                            defaultRoundedEdgeCircularRadius),
                        boxShadow: [
                          BoxShadow(
                            color: Colors.black.withOpacity(0.5),
                            blurRadius: 7,
                            offset: const Offset(0, 1),
                          )
                        ],
                      ),
                      child: GestureDetector(
                        child: ClipRRect(
                          borderRadius: BorderRadius.circular(
                              defaultRoundedEdgeCircularRadius),
                          child: Image.asset('assets/images/owl.jpg'),
                        ),
                        onTap: () {
                          final snackBar = SnackBar(
                            content: const Text(
                              'Want to find out where this pfp came from?',
                              style: TextStyle(),
                            ),
                            duration: const Duration(seconds: 3),
                            behavior: SnackBarBehavior.floating,
                            action: SnackBarAction(
                              label: 'Click here!',
                              onPressed: () async {
                                final Uri url = Uri.parse(
                                    'https://wallpaperhub.app/wallpapers/1313');
                                if (await canLaunchUrl(url)) launchUrl(url);
                              },
                            ),
                          );
                          ScaffoldMessenger.of(context).showSnackBar(snackBar);
                        },
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
      drawer: drawer,
      // body: Center(
      //   child: TextButton(
      //     onPressed: () {
      //       Navigator.push(context, MaterialPageRoute(builder: (context) {
      //         return const SecondPage(title: 'SecondPage');
      //       }));
      //     },
      //     child: const Text('Next'),
      //   ),
      // ),
    );
  }
}
