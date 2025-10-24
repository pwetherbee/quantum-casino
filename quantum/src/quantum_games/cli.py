"""Simple CLI to test quantum games."""

import argparse
import json
from .games import play_filter, play_entangled_wager


def main():
    """Main CLI entry point."""
    parser = argparse.ArgumentParser(description="Quantum Games CLI")
    subparsers = parser.add_subparsers(dest="command", help="Game to play")
    
    # Filter game command
    filter_parser = subparsers.add_parser("filter", help="Play the Filter game")
    filter_parser.add_argument("--qcount", type=int, required=True, help="Number of quantum chips")
    filter_parser.add_argument("--shots", type=int, default=None, help="Number of shots (default from env)")
    
    # Entangled wager game command
    entangled_parser = subparsers.add_parser("entangled", help="Play the Entangled Wager game")
    entangled_parser.add_argument("--qa", type=int, required=True, help="Player A quantum chips")
    entangled_parser.add_argument("--qb", type=int, required=True, help="Player B quantum chips")
    entangled_parser.add_argument("--shots", type=int, default=None, help="Number of shots (default from env)")
    
    args = parser.parse_args()
    
    if not args.command:
        parser.print_help()
        return
    
    try:
        if args.command == "filter":
            print(f"Playing Filter game with qcount={args.qcount}, shots={args.shots or 'default'}...")
            result = play_filter(args.qcount, args.shots)
            print(json.dumps(result, indent=2))
        
        elif args.command == "entangled":
            print(f"Playing Entangled Wager: Player A={args.qa}, Player B={args.qb}, shots={args.shots or 'default'}...")
            result = play_entangled_wager(args.qa, args.qb, args.shots)
            print(json.dumps(result, indent=2))
    
    except Exception as e:
        print(f"Error: {e}")
        import traceback
        traceback.print_exc()
        return 1
    
    return 0


if __name__ == "__main__":
    exit(main())
