import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/5 py-12 text-sm footer-updated">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <img src="./logo-horizontal-red.png" alt="RubidWeb" className="h-12 w-auto mb-6" />
                        <p className="text-gray-500 max-w-sm mb-6">
                            Redefining digital marketing through automation and artificial intelligence.
                            The future is autonomous.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-rubid-red hover:text-white transition-colors text-gray-400">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-rubid-red hover:text-white transition-colors text-gray-400">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-rubid-red hover:text-white transition-colors text-gray-400">
                                <Github size={18} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-4 uppercase tracking-wider text-xs">Platform</h3>
                        <ul className="space-y-2 text-gray-500">
                            <li><a href="#" className="hover:text-rubid-red transition-colors">ADMAKI Intelligence</a></li>
                            <li><a href="#" className="hover:text-rubid-red transition-colors">Analytics Core</a></li>
                            <li><a href="#" className="hover:text-rubid-red transition-colors">Integrations</a></li>
                            <li><a href="#" className="hover:text-rubid-red transition-colors">Security</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-4 uppercase tracking-wider text-xs">Company</h3>
                        <ul className="space-y-2 text-gray-500">
                            <li><a href="#" className="hover:text-rubid-red transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-rubid-red transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-rubid-red transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-rubid-red transition-colors flex items-center gap-2"><Mail size={14} /> hello@rubid.io</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600">
                    <p>&copy; {new Date().getFullYear()} RubidWeb. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
